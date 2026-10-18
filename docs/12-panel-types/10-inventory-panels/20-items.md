# 物品

面板物品需在`items`中定义。每个物品都可以配置它们的外观、行、逻辑以及与玩家的交互。本页面会介绍所有跟物品有关的配置选项。

## 添加物品

`items`内的物品需通过唯一标识名进行定义。通过引用相应的标识名，将已定义的物品配置到指定的槽位。

------

## 材料

定义物品的原材料。

```yaml
material: 'IRON_INGOT'
```

```yaml
material: '[head] %player_name%'
```

### 支持的材料标签

| 标签           | 描述                                                            |
|--------------|---------------------------------------------------------------|
| [head]       | 玩家头颅。使用`[head] <base64>`显示自定义头颅纹理，使用`[head] <玩家名称>`显示对应玩家的头颅。 |
| [nexo]       | 用于**Nexo**的自定义物品，例如`[nexo] crystal_shard`。                    |
| [itemsadder] | 用于**ItemsAdder**的物品，例如`[itemsadder] money:coin`。              |
| [hdb]        | 集成了**Head Database**，使用**Head Database**中的头颅编号。               |
| [mmo]        | 用于**MMOItems**的物品，例如`[mmo] SWORD flame_blade`。                |

:::tip

- 推荐用`[head] <base64>`来获取玩家的头颅。
- 若使用`[head] <玩家名称>`来获取**离线玩家**的头颅，则获取时系统会通过队列从Mojang API获取并缓存纹理。若Mojang请求超时，则会导致纹理获取失败，因此对于离线玩家来说该获取方法可能并不可靠。

:::

------

## 物品属性

是否显示属性，默认为`false`。

```yaml
attributes: true
```

------

## 物品提示框

是否显示提示框，默认为`true`。

```yaml
tooltip: false
```

------

## 物品提示框样式

定义自定义提示框的样式。

```yaml
tooltip-style: '[样式名称]'
```

------

## 物品名称

定义物品的显示名称。

```yaml
name: '&a生存服'
```

------

## 物品堆叠

定义物品的数量。

```yaml
stack: 1
```

------

## 魔咒

应用魔咒会使物品获得光效。魔咒名称的前面可加上命名空间，如下所示。

```yaml
enchantments:
  - 'KNOCKBACK 2'
  - 'minecraft:SHARPNESS 4'
```

------

## 动画

设置动画属性，详情请参阅配置页面，了解动画的运作原理。

```yaml
animate: 'item2'
```

------

## 物品模型

设置物品的物品模型组件。

```yaml
item-model: 'template:sword'
```

------

## 自定义模型数据

设置物品的物品模型数据。

```yaml
custom-model-data: '60254'
```

------

## 物品损坏值

设置物品的耐久度。`-1`表示物品不可破坏。

```yaml
damage: 10
```

------

## 所染颜色

将RGB颜色值应用于可染色的物品。

```yaml
leather-color: 11,45,14
```

------

## 盔甲纹饰

使用图案和材料名称添加盔甲纹饰。

```yaml
armor-trim: 'EMERALD COAST'
```

格式：

```yaml
armor-trim: '[材料] [图案]'
```

------

## 药水效果

应用药水视觉效果。适用于药水物品与药箭。

```yaml
potion: 'STRONG_HEALING'
```

修改RGB颜色：

```yaml
potion-color: '19,198,10'
```

------

## 物品描述信息

物品提示框中的描述信息，可多行显示。

```yaml
lore:
  - '&2治疗并'
  - '&2切换到生存模式。'
```

------

## 自定义旗帜

通过材料和图案列表自定义旗帜。

```yaml
material: 'RED_BANNER'
banner:
  - 'WHITE,STRIPE_MIDDLE'
  - 'BLACK,SKULL'
```

请使用Paper API中指定的图案类型。注意按照从上到下的顺序排列。

