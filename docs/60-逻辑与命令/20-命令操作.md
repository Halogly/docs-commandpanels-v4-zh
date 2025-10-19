# 命令操作

命令操作用于定义当玩家与面板组件交互时触发的操作。例如点击按钮、提交对话框或者打开一个新的面板。操作由三个部分协同组成：`requirements`（执行条件），`commands`（执行命令）和`fail`（失败处理）。

命令操作可用于任何支持**执行命令**的组件，包括：

- 箱子面板（`actions`、`left-click`、`right-click`、`shift-left-click`、`shift-right-click`）
- 对话框面板（`actions`）
- 基岩面板（`actions`）

------

## 命令操作结构

根据面板或组件的类型，命令操作可以配置在特定的点击类型下，也可以直接放在`actions`下。在箱子面板中使用`actions`而未指定具体的点击类型时，任何一种点击操作都会触发配置中的命令。

### 箱子面板示例

```yaml
left-click:
  requirements:
    - "[vault] 100"
  commands:
    - "[msg] 你为了打开这个支付了100元！"
  fail:
    - "[msg] 余额不足！"
```

### 对话框、基岩面板示例

```yaml
actions:
  requirements:
    - "[vault] 500"
  commands:
    - "[open] premium_panel"
  fail:
    - "[msg] 你需要500元才能打开这个面板。"
```

------

## 结构

| 模块             | 描述                           |
|----------------|------------------------------|
| `requirements` | **条件需求标签列表**。必须全部满足命令才能执行。   |
| `commands`     | 当需求满足（或未设置需求）时运行的**命令标签列表**。 |
| `fail`         | 仅在条件需求**未满足**时运行的**命令标签列表**。 |

------

### 行为规则

- 如果未定义`requirements`，将直接运行`commands`列表中的命令。
- 如果定义了`requirements`，但条件需求未满足，则运行`fail`列表中的命令。
- 这三个配置项均是可选项，但通常至少需要配置`commands`。