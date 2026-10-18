# 注册表

CommandPanels 的注册表允许你在插件启动时注册自定义实现，从而接入该插件。共有四个可用的注册表：

| 注册表 | 描述 |
| --- | --- |
| **MATERIAL_COMPONENTS** | 创建一个自定义&#x7684;_&#x6750;质标签_，根据标签字符串构建一个`ItemStack`。 |
| **ITEM_COMPONENTS** | 在`ItemStack`构建完成后，为其应用自定义属性或数据。 |
| **REQUIREMENT_TAG_RESOLVERS** | 添加一个自定义&#x7684;_&#x9700;求标签_，用于检查条件并可选地消耗资源。 |
| **COMMAND_TAG_RESOLVERS** | 添加一个自定义&#x7684;_&#x547D;令标签_，当玩家点击面板物品时执行相应逻辑。 |

最好在 `onEnable()` 中注册你的实现，如果不在此处，最好在任何先于玩家打开面板的位置进行注册。

```java
import me.rockyhawk.commandpanels.api.Registry;

Registry.MATERIAL_COMPONENTS.insert(
    new YourMaterialTag()
);

Registry.ITEM_COMPONENTS.insert(
    new YourItemTag()
);

Registry.REQUIREMENT_TAG_RESOLVERS.insert(
    new YourRequirementTag()
);

Registry.COMMAND_TAG_RESOLVERS.insert(
    new YourCommandTag()
);
```

---

## MaterialComponent (材质组件)

实现 `MaterialComponent`，将自定义的材质标签解析为底层的 `ItemStack`。引擎会对每一个无法识别的材质字符串调用 `isCorrectTag`，并将处理操作委托给第一个匹配的组件。随后，属性会叠加到返回的物品之上。

```java
public interface MaterialComponent {
    boolean isCorrectTag(String tag);
    ItemStack createItem(Context ctx, String itemID, Player player, PanelItem item);
}
```

从 `createItem` 返回 `null` 以表示失败。CommandPanels 会优雅地回退处理。

例如，添加一个 `[craftengine]` 材质标签可能看起来像这样：

```java
public class CraftEngineComponent implements MaterialComponent {

    // 定义你的材质标签名称
    @Override
    public boolean isCorrectTag(String tag) {
        return tag.toLowerCase().startsWith("[craftengine]");
    }

    // 在这里创建你的自定义ItemStack
    @Override
    public ItemStack createItem(Context ctx, String itemID, Player player, PanelItem item) {
        var definition = CraftEngineItems.byId(itemID);

        if (definition == null) {
            return null;
        }

        return definition.buildBukkitItem(player);
    }
}
```

## ItemComponent (物品组件)

实现 `ItemComponent`，向已经构建好的 `ItemStack` 应用附加数据。这是为了在每个面板的 `ItemStack` 构造完成之后修改物品。

```java
public interface ItemComponent {
    ItemStack apply(Context ctx, ItemStack itemStack, Player player, PanelItem item);
}
```

从 `apply` 返回修改后的 `ItemStack`。返回的 `ItemStack` 会替换构建流程中当前这个物品。若不想做任何更改，只需原样返回 `ItemStack` 即可。

例如，下面的示例会在 `custom-model-data` 值等于`'five'` 时将物品堆叠数量设置为 5：

```java
public class CustomModelDataComponent implements ItemComponent {

    @Override
    public ItemStack apply(Context ctx, ItemStack itemStack, Player player, PanelItem item) {
        if(!item.customModelData().equals("five")) return itemStack;

        itemStack.setAmount(5);

        return itemStack;
    }
}
```

---

## RequirementTagResolver (需求标签解析器)

实现 `RequirementTagResolver` 以添加自定义的需求标签。引擎会首先调用 `check`。如果它返回 `false`，则执行 `fail` 命令列表，而不是 `commands`。如果 `check` 返回 `true`，则会调用 `execute` 来消耗资源 (例如扣除货币)，然后再执行 `commands`。

如果你不希望对玩家进行任何扣除的操作，`execute` 中的代码可以留空，因为有些需求标签可能只做检查而不进行实际扣除。

```java
public interface RequirementTagResolver {
    boolean isCorrectTag(String tag);
    boolean check(Context ctx, Panel panel, Player player, String raw, String args);
    void execute(Context ctx, Panel panel, Player player, String raw, String args);
}
```

`args` 字符串是标签之后的所有内容，其中的占位符已经被解析。`raw` 字符串与之相同，但不解析占位符。如果你执行的操作需要占位符保持未解析状态，则需要使用 `raw`。

下面是一个简单的示例，用于确认玩家是否拥有特定权限：

```java
public class PermissionTag implements RequirementTagResolver {

    @Override
    public boolean isCorrectTag(String tag) {
        return tag.equalsIgnoreCase("[permission]");
    }

    @Override
    public boolean check(Context ctx, Panel panel, Player player, String raw, String args) {
        return player.hasPermission(args);
    }

    @Override
    public void execute(Context ctx, Panel panel, Player player, String raw, String args) {
        // 无需从玩家那里扣除任何东西，留空
    }
}
```

## CommandTagResolver（命令标签解析器）

实现 `CommandTagResolver` 以处理自定义的命令标签。当玩家与面板物品交互，该物品的命令列表中含有你的标签时，会调用 `handle`。

```java
public interface CommandTagResolver {
    boolean isCorrectTag(String tag);
    void handle(Context ctx, Panel panel, Player player, String raw, String command);
}
```

`command` 字符串是标签之后的所有内容，其中的占位符已经被解析。`raw` 字符串与之相同，但不解析占位符。如果你执行的操作需要占位符保持未解析状态，则需要使用 `raw`。

下面的示例会向服务器广播一条消息：

```java
public class BroadcastTag implements CommandTagResolver {

    @Override
    public boolean isCorrectTag(String tag) {
        return tag.startsWith("[broadcast]");
    }

    @Override
    public void handle(Context ctx, Panel panel, Player player, String raw, String command) {
        Bukkit.broadcastMessage(command);
    }
}
```
