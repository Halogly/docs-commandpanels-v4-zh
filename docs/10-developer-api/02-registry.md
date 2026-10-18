import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 快速上手

本页面将带你快速了解CommandPanels面板文件的核心结构与运作机制，以及如何创建你的第一个自定义面板。通过`/pa [参数]`使用插件的主要功能。

------

## 生成面板

你可以使用`/pa generate`命令，直接根据箱子内的物品布局来快速创建一个新面板。

运行命令后：

- 你会进入**生成模式**。
- 在生成模式中，**右键你已经摆好了面板布局的箱子**。
- 就会根据箱子内的的物品布局创建出一个新的面板文件。

这种方法可以快速为箱子面板创建布局，无需手动编写YAML文件。

------

## 基础面板文件

- 每个面板都由`panels`文件夹中的YAML文件定义。

- 文件名是面板的**唯一标识名**。

- 面板支持三种类型：

    - `inventory`：传统箱子菜单。
    - `dialog`：Java版玩家特有的对话框界面。
    - `floodgate`：基岩版专属表单。

每种类型的配置选项都略有不同，但核心结构是类似的。

------

## 主面板属性

- `type`：面板类型（`inventory`、`dialog`或`floodgate`）。
- `title`：窗口的标题，可以使用占位符。
- `conditions`：指定打开面板的条件。
- `command`：打开面板的命令，可选带参数。
- `commands`：面板打开前要执行的命令。
- `update-delay`：定义箱子面板的更新频率（以刻为单位，0表示禁用更新）。
- `rows`：行数（仅箱子面板可用）。
- `layout`：定义物品在箱子面板中显示的槽位，以及对话框和基岩面板中组件的显示顺序。
- `items`：定义箱子面板中显示的物品，或对话框和基岩面板的组件。

------

## 示例面板文件

<Tabs>
<TabItem value="示例箱子面板" label="箱子面板">

结构简单的面板，一个物品在指定槽位中，点击它可以发送消息。

```yaml
title: '箱子面板模板'
type: 'inventory'

rows: 1

layout:
  fill:
    - 'example_empty_item'
  4:
    - 'example_item'

items:
  example_empty_item:
    material: 'BLACK_STAINED_GLASS_PANE'

  example_item:
    material: 'REDSTONE'
    name: '示例物品'
    animate: 'frame_1'
    left-click:
      commands:
        - '[msg] 你点了我一下。'
```

</TabItem>
<TabItem value="示例对话框面板" label="对话框面板">

为Java版玩家显示一个自定义对话框面板。

```yaml
title: '对话框面板模板'
type: 'dialog'

columns: 1
has-exit-button: false
escapable: true

layout:
  0:
    - 'welcome_text'
  1:
    - 'confirm_button'

items:
  welcome_text:
    type: 'text'
    name: '&6欢迎来到对话框！'

  confirm_button:
    type: 'button'
    name: '点击确认'
    actions:
      commands:
        - '[msg] 感谢点击！'
```

</TabItem>
<TabItem value="示例简易式基岩面板" label="简易式基岩面板">

只能由基岩版玩家打开，一个基于按钮的简易式基岩表单。

```yaml
title: '基岩面板模板'
type: 'floodgate'

floodgate-type: 'simple'

layout:
  0:
    - 'example_button'

items:
  example_button:
    name: '点我！'
    icon:
      type: 'PATH'
      texture: 'textures/items/redstone_dust.png'
    actions:
      commands:
        - '[msg] 你好！爱来自水闸门~'
```

</TabItem>
<TabItem value="示例自定义式基岩面板" label="自定义式基岩面板">

只能由基岩版玩家打开，一个用于输入的自定义式基岩表单。

```yaml
title: '基岩面板模板'
type: 'floodgate'

floodgate-type: 'custom'

layout:
  0:
    - 'inputexample'
  1:
    - 'sliderexample'

items:
  inputexample:
    type: 'input'
    name: '下方的文本框'
    placeholder: '在这里输入'
    default: ''
    actions:
      commands:
        - '[msg] 你说了：%commandpanels_session_inputexample%'

  sliderexample:
    type: 'slider'
    name: '滑动滑块'
    min: 1
    max: 10
    step: 1
    default: 5
    actions:
      commands:
        - '[msg] 你选择了：%commandpanels_session_sliderexample%'
```

</TabItem>
</Tabs>

## 操作与条件

CommandPanels使用功能强大且灵活的**点击操作**系统，该系统适用于*所有面板类型*。理解操作和条件的原理是构建交互式和动态化菜单的关键。有关这些功能的详细说明，请参阅相关文档页面。

------

### 点击操作

当玩家与组件交互时（例如点击按钮或物品），会使用点击操作。操作支持：

- **需求标签**：可选，命令必须符合相应的条件才能运行。
- **命令标签**：要运行的命令，例如发送消息、执行服务器命令或是打开其他面板。

通过以上即可实现**条件执行逻辑**。例如，玩家不满足条件时发送一条消息；满足条件，则打开另一个面板。

------

### 条件

**条件**控制界面元素的可见性和行为。主要应用于以下场景：

- **面板层面**：判定玩家是否拥有打开面板的权限。
- **组件层面**：控制指定物品或按钮是否显示。

条件包括逻辑、占位符比较、权限、世界检测等多种判定模式。通过这些动态条件，你可以根据玩家身份、所处世界或服务器状态来自定义面板呈现的内容。

------

### 总结

| 功能       | 目的               | 使用场景      |
|----------|------------------|-----------|
| **命令标签** | 执行不同操作的特殊命令。     | 命令操作内部    |
| **需求标签** | 可选，命令必须符合需求才能运行。 | 命令操作内部    |
| **条件**   | 控制组件的逻辑和面板的可见性。  | 所有面板组件和物品 |

------

## 提示

- 善用占位符，让面板内容随条件变化。
- 将物品定义与槽位布局分离，便于维护。
- 利用逻辑条件，为不同玩家或场景定制交互。
- 使用动画帧，为操作提供丰富的视觉响应。
- 这应该能助你快速创建你的第一个面板！