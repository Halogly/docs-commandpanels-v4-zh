# 条件判断

面板、组件、按钮和其他面板元素都可以使用**条件判断**控制是否显示或可被访问。条件判断使用的是自定义语法构建的逻辑语句，用于检查玩家名称、权限、值等内容。

通过这些逻辑表达式，你可以根据服务器的状态或玩家数据来动态控制面板的行为。条件判断支持PlaceholderAPI占位符，以此从其他插件获取所需数据。

------

## 条件的原理

在任何使用`conditions`的地方（如面板或组件上），你都可以定义一个逻辑表达式，用于决定这个对象是否可用。

若条件判断结果为**true**，这个对象将显示或可交互；若结果为**false**，则会被隐藏或跳过。

条件按**从左到右**的顺序解析，并且支持：

- 逻辑运算符：`$AND`，`$OR`，`$NOT`
- 比较运算符：`$EQUALS`，`$ATLEAST`，`$HASPERM`
- **括号**分组（仅支持单层嵌套）

格式和空格的使用是**严格受限的**。条件必须严格遵循下方的简单示例所示的格式。

:::warning

比较条件中不支持空格。如果占位符返回的内容包含空格，这些空格都会被转换为下划线。

:::

------

## 简单示例

检查玩家名称是否是“Halogly”**并且**他是否拥有`gamemode.creative`权限：

```yaml
conditions: "%player_name% $EQUALS Halogly $AND %player_name% $HASPERM gamemode.creative"
```

与上述相同，但他现在需要**不具有**这个权限才能通过：

```yaml
conditions: "%player_name% $EQUALS Halogly $AND $NOT %player_name% $HASPERM gamemode.creative"
```

使用**括号**分组检查：玩家名称**不能**为“Halogly”并且不具有指定权限：

```yaml
conditions: "$NOT (%player_name% $EQUALS Halogly $AND %player_name% $HASPERM gamemode.creative)"
```

使用多个表达式的复杂条件判断：

```yaml
conditions: "$NOT (%player_name% $EQUALS Halogly $AND 400 $ATLEAST 500) $AND ($NOT %player_name% $EQUALS Steve $OR %player_name% $HASPERM gamemode.creative)"
```

------

## 实际使用示例

下面的示例展示了如何利用条件判断为面板中的物品添加条件逻辑。在此示例中，我们设置了一个物品，它可以让玩家通过支付一定的费用从等级二升级到等级三。系统会根据玩家是否拥有等级三、是否已具备等级二前置条件、以及金额是否充足，来动态显示这四个物品。

```yaml
layout:
  '4':
    - already_rank_three # 已达到等级三
    - no_rank_before_three # 未达到等级二
    - buy_rank_three # 购买等级三
    - not_enough_rank_three # 升级条件不足

items:
  already_rank_three:
    material: 'LIGHT_BLUE_WOOL'
    name: '<aqua><bold>lv3'
    conditions: '%player_name% $HASPERM rank.level.3'
    lore:
      - '<dark_aqua>[!] 你已经位于此等级了。'
  no_rank_before_three:
    material: 'RED_WOOL'
    conditions: '$NOT %player_name% $HASPERM rank.level.2'
    name: '<red><bold>lv3'
    lore:
      - "<dark_red>[!] 你需要先位于前一等级。"
  buy_rank_three:
    material: 'LIME_WOOL'
    name: '<green><bold>lv3'
    lore:
      - '<dark_green>[!] 支付5000元'
    conditions: '%vault_eco_balance% $ATLEAST 5000'
    actions:
      requirements:
        - '[vault] 5000'
      commands:
        - '[sound] ENTITY.PLAYER.LEVELUP'
        - '[msg] <reset>'
        - '[msg] <reset>     <gold><bold>恭喜你，<white>%player_name%<gold>'
        - '[msg] <white>     你已成功升级到<aqua>lv3'
        - '[msg] <reset>'
        - '[console] lp user %player_name% permission set rank.level.3 true'
        - '[refresh] 3'
  not_enough_rank_three:
    material: 'RED_WOOL'
    name: '<red><bold>lv3'
    lore:
      - "<dark_red>[!] 你至少需要5000元才能升级。"
```

------

## 运算符

### 非

用法：`$NOT`

对后面的条件进行取反。也可用括号包裹一组条件进行整体取反。

### 与

用法：`$AND`

要求左右两侧条件必须**同时成立**。

### 或

用法：`$OR`

要求左右两侧条件**至少有一个成立**。

------

## 比较符

### 等于

用法：`$EQUALS`

比较两个值是否相等，不区分字母大小写。

```yaml
conditions: '%player_name% $EQUALS Halogly'
```

### 大于等于

用法：`$ATLEAST`

比较两个数值。当第一个数值**大于等于**第二个数值时成立。

```yaml
conditions: '%player_health% $ATLEAST 10'
```

### 权限判断

用法：`$HASPERM`

检查指定玩家是否具有指定权限。

```yaml
conditions: '%player_name% $HASPERM commandpanels.open'
```

------

:::warning

- 条件表达式仅支持**单层**括号，嵌套括号将无法正常解析。
- 存在语法错误或无效条件时，会在控制台输出错误信息，或在使用时始终判定条件不成立。

:::

## 条件的使用场景

条件判断可在面板的多个场景中使用，包括：

- **面板层面**：控制面板的访问权限。
- **组件层面**：控制单个按钮或组件的显示与隐藏。
- **对话框元素**：根据条件显示输入框或文本块。
- **基岩面板或物品按钮**：根据用户状态动态显示内容。