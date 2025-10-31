import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 语言

CommandPanels支持通过`lang.yml`文件来更改语言。你可以自定义并翻译插件发送的消息，包括错误、警告和信息。

除了错误、警告和系统信息外，插件在执行面板命令标签及其他功能时不会发送任何提示消息。这样用户就能自定义面板发送的消息（仅当你想要发送消息时）。

-----

## 存放位置

访问存放在**CommandPanels插件文件夹**里面的`lang.yml`文件，在`config.yml`旁边。

位置在这里：

```text
/plugins/CommandPanels/
├── config.yml
├── lang.yml
├── panels/
```

-----

## 中文配置

<Tabs>
<TabItem value="简体" label="简体（中国大陆）">

```yaml
# 翻译：Halogly
# 版本：4.1.4
prefix: "[CommandPanels]"

command_no_permission: "权限不足。"
command_unknown_subcommand: "未知的子命令，请使用 /pa help 查看帮助。"
command_subcommand_help: "使用 /pa help 查看子命令列表。"

file_create_example_fail: "无法创建示例面板！"
file_create_panels_fail: "创建面板文件夹失败！"
file_create_config_fail: "无法创建配置文件！"
file_update_config_fail: "无法更新配置文件！"
file_create_lang_fail: "创建语言文件失败！"
file_update_lang_fail: "更新语言文件失败！"
file_save_data_fail: "无法保存数据文件。"
file_save_panel_fail: "无法保存新面板文件。"

panel_layout_number_missing: "面板布局存在编号缺失或跳跃。"
panel_invalid_type: "无效的箱子类型。"
panel_not_found: "未找到指定面板。"
panel_open_triggered: "已为玩家打开面板。"
panel_open_log: "{0} 打开了 {1}。"
panel_open_usage: "用法：/pa open <面板名称> [玩家名称]"
panel_open_player_required: "你必须是一名玩家才能为自己打开面板。"
panel_open_player_offline: "玩家不在线。"

item_create_fail: "创建物品 {0} 失败，问题位于：{1}"
item_cooldown: "请等待 {0} 秒后再试。"
item_decoration_fail: "为 {0} 添加物品装饰失败，问题位于：{1}"
item_head_load_fail: "头颅材质标签：无法加载头颅：{0}"
item_model_invalid: "无效的物品模型格式，必须为 命名空间:键名。"
item_custom_model_invalid: "无效的自定义模型数据，该值不能为空。"
item_give_error: "给予物品时发生错误。"
item_grant_syntax_invalid: "语法无效。用法：[grant] 权限 命令"
item_action_syntax_invalid: "无效的物品操作语法。用法: 槽位 操作 [参数]"
item_action_unknown: "未知的物品操作"
item_action_execute_fail: "执行物品操作时发生错误。"
item_action_usage_improper: "用法不当。"
item_enchant_missing_args: "缺少魔咒名称或等级。"
item_enchant_invalid: "无效的魔咒"
item_enchant_remove_missing: "缺少要移除的魔咒名称。"
item_enchant_action_unknown: "未知的附魔操作。"

data_usage: "用法：/pa data <操作> <玩家> [键] [值]"
data_missing_key: "缺少键名。"
data_missing_key_or_value: "缺少键名或值。"
data_missing_key_or_expression: "缺少键名或表达式。"
data_unknown_action: "未知操作。"
data_player_required: "你必须是一名玩家。"
data_value: "值：{0}"
data_set: "已将键 '{0}' 的值设置为 '{1}'（若不存在则创建）。"
data_overwrite: "已将键 '{0}' 的值覆盖为 '{1}'。"
data_math: "已对键 '{1}' 执行数学运算 '{0}'。"
data_delete: "已删除键 '{0}'。"
data_clear: "已清除 '{0}' 的所有数据。"

requirement_unknown_tag: "未知的条件需求标签。"
requirement_data_invalid: "无效的数据需求。用法：[data] <键> <数量>"
requirement_amount_invalid: "无效的数量。"
requirement_data_read_fail: "无法读取数据。"
requirement_material_invalid: "无效的材料。"
requirement_material_required: "物品需求必须指定材料。"
requirement_economy_invalid: "无效的经济系统数值：{0}"
requirement_xp_invalid: "无效的经验需求。用法：[xp] <levels|points> <数量>"
requirement_xp_amount_invalid: "无效的经验数量。"
requirement_xp_type_invalid: "无效的经验类型。"
requirement_item_invalid: "无效的物品。"
requirement_source_invalid: "无效的目标，对象必须为玩家或面板。"

sound_no_args: "未提供声音参数。"
sound_play_fail: "播放声音失败。"
sound_stop_fail: "停止播放声音失败。"

generate_mode_enabled: "生成模式已启用。"
generate_mode_expired: "生成模式已过期。"
generate_panel_created: "已生成新的面板文件。"

plugin_commands: "插件命令："
plugin_reloaded: "插件已重载。"
plugin_developer: "开发者 {0}"
plugin_version: "版本 {0}"

help_open_command: "/pa open <面板> [玩家] "
help_open_description: "打开一个面板"
help_reload_command: "/pa reload"
help_reload_description: "重载所有配置和面板文件"
help_generate_command: "/pa generate"
help_generate_description: "进入生成模式以创建面板"
help_data_command: "/pa data"
help_data_description: "修改玩家数据"
help_version_command: "/pa version"
help_version_description: "获取插件版本"
help_help_command: "/pa help"
help_help_description: "显示此帮助列表"

dialog_no_buttons: "对话框至少需要一个按钮"
cooldown_error: "你打开面板的速度太快了"
teleport_error: "传送标签出错"
require_head_database: "请下载 HeadDatabase 插件以使用此功能！"
```

</TabItem>
<TabItem value="繁体（中国香港）" label="繁体（中国香港）">

```yaml
# 翻譯：Halogly，AI
# 版本：4.1.4
prefix: "[CommandPanels]"

command_no_permission: "權限不足。"
command_unknown_subcommand: "未知的子命令，請使用 /pa help 查看說明。"
command_subcommand_help: "使用 /pa help 查看子命令列表。"

file_create_example_fail: "無法建立範例面板！"
file_create_panels_fail: "建立面板資料夾失敗！"
file_create_config_fail: "無法建立設定檔！"
file_update_config_fail: "無法更新設定檔！"
file_create_lang_fail: "建立語言檔案失敗！"
file_update_lang_fail: "更新語言檔案失敗！"
file_save_data_fail: "無法儲存資料檔案。"
file_save_panel_fail: "無法儲存新面板檔案。"

panel_layout_number_missing: "面板版面配置存在編號缺失或跳躍。"
panel_invalid_type: "無效的儲物箱類型。"
panel_not_found: "找不到指定面板。"
panel_open_triggered: "已為玩家開啟面板。"
panel_open_log: "{0} 開啟了 {1}。"
panel_open_usage: "用法：/pa open <面板名稱> [玩家名稱]"
panel_open_player_required: "你必須是一名玩家才能為自己開啟面板。"
panel_open_player_offline: "玩家不在線。"

item_create_fail: "建立物品 {0} 失敗，問題位於：{1}"
item_cooldown: "請等待 {0} 秒後再試。"
item_decoration_fail: "為 {0} 加入物品裝飾失敗，問題位於：{1}"
item_head_load_fail: "頭顱材質標籤：無法載入頭顱：{0}"
item_model_invalid: "無效的物品模型格式，必須為 命名空間:鍵名。"
item_custom_model_invalid: "無效的自訂模型資料，該值不能為空。"
item_give_error: "給予物品時發生錯誤。"
item_grant_syntax_invalid: "語法無效。用法：[grant] 權限 命令"
item_action_syntax_invalid: "無效的物品操作語法。用法: 欄位 操作 [參數]"
item_action_unknown: "未知的物品操作"
item_action_execute_fail: "執行物品操作時發生錯誤。"
item_action_usage_improper: "用法不當。"
item_enchant_missing_args: "缺少附魔名稱或等級。"
item_enchant_invalid: "無效的附魔"
item_enchant_remove_missing: "缺少要移除的附魔名稱。"
item_enchant_action_unknown: "未知的附魔操作。"

data_usage: "用法：/pa data <操作> <玩家> [鍵] [值]"
data_missing_key: "缺少鍵名。"
data_missing_key_or_value: "缺少鍵名或值。"
data_missing_key_or_expression: "缺少鍵名或表達式。"
data_unknown_action: "未知操作。"
data_player_required: "你必須是一名玩家。"
data_value: "值：{0}"
data_set: "已將鍵 '{0}' 的值設定為 '{1}'（若不存在則建立）。"
data_overwrite: "已將鍵 '{0}' 的值覆蓋為 '{1}'。"
data_math: "已對鍵 '{1}' 執行數學運算 '{0}'。"
data_delete: "已刪除鍵 '{0}'。"
data_clear: "已清除 '{0}' 的所有資料。"

requirement_unknown_tag: "未知的條件需求標籤。"
requirement_data_invalid: "無效的資料需求。用法：[data] <鍵> <數量>"
requirement_amount_invalid: "無效的數量。"
requirement_data_read_fail: "無法讀取資料。"
requirement_material_invalid: "無效的材料。"
requirement_material_required: "物品需求必須指定材料。"
requirement_economy_invalid: "無效的經濟系統數值：{0}"
requirement_xp_invalid: "無效的經驗需求。用法：[xp] <levels|points> <數量>"
requirement_xp_amount_invalid: "無效的經驗數量。"
requirement_xp_type_invalid: "無效的經驗類型。"
requirement_item_invalid: "無效的物品。"
requirement_source_invalid: "無效的目標，物件必須為玩家或面板。"

sound_no_args: "未提供聲音參數。"
sound_play_fail: "播放聲音失敗。"
sound_stop_fail: "停止播放聲音失敗。"

generate_mode_enabled: "生成模式已啟用。"
generate_mode_expired: "生成模式已過期。"
generate_panel_created: "已生成新的面板檔案。"

plugin_commands: "插件命令："
plugin_reloaded: "插件已重新載入。"
plugin_developer: "開發者 {0}"
plugin_version: "版本 {0}"

help_open_command: "/pa open <面板> [玩家] "
help_open_description: "開啟一個面板"
help_reload_command: "/pa reload"
help_reload_description: "重新載入所有設定和面板檔案"
help_generate_command: "/pa generate"
help_generate_description: "進入生成模式以建立面板"
help_data_command: "/pa data"
help_data_description: "修改玩家資料"
help_version_command: "/pa version"
help_version_description: "取得插件版本"
help_help_command: "/pa help"
help_help_description: "顯示此說明列表"

dialog_no_buttons: "對話框至少需要一個按鈕"
cooldown_error: "你開啟面板的速度太快了"
teleport_error: "傳送標籤出錯"
require_head_database: "請下載 HeadDatabase 插件以使用此功能！"
```

</TabItem>
<TabItem value="繁体（中国台湾）" label="繁体（中国台湾）">

```yaml
# 翻譯：Halogly，AI
# 版本：4.1.4
prefix: "[CommandPanels]"

command_no_permission: "權限不足。"
command_unknown_subcommand: "未知的子指令，請使用 /pa help 查看說明。"
command_subcommand_help: "使用 /pa help 查看子指令列表。"

file_create_example_fail: "無法建立範例面板！"
file_create_panels_fail: "建立面板資料夾失敗！"
file_create_config_fail: "無法建立設定檔！"
file_update_config_fail: "無法更新設定檔！"
file_create_lang_fail: "建立語言檔失敗！"
file_update_lang_fail: "更新語言檔失敗！"
file_save_data_fail: "無法儲存資料檔。"
file_save_panel_fail: "無法儲存新面板檔。"

panel_layout_number_missing: "面板版面配置有編號缺失或跳號。"
panel_invalid_type: "無效的箱子類型。"
panel_not_found: "找不到指定的面板。"
panel_open_triggered: "已為玩家開啟面板。"
panel_open_log: "{0} 開啟了 {1}。"
panel_open_usage: "使用方式：/pa open <面板名稱> [玩家名稱]"
panel_open_player_required: "你必須是玩家才能為自己開啟面板。"
panel_open_player_offline: "玩家離線中。"

item_create_fail: "建立物品 {0} 失敗，問題在：{1}"
item_cooldown: "請等待 {0} 秒後再試。"
item_decoration_fail: "為 {0} 添加物品裝飾失敗，問題在：{1}"
item_head_load_fail: "頭顱材質標籤：無法載入頭顱：{0}"
item_model_invalid: "無效的物品模型格式，必須為 命名空間:鍵名。"
item_custom_model_invalid: "無效的自訂模型資料，此值不能為空。"
item_give_error: "發送物品時發生錯誤。"
item_grant_syntax_invalid: "語法無效。使用方式：[grant] 權限 指令"
item_action_syntax_invalid: "無效的物品操作語法。使用方式: 欄位 操作 [參數]"
item_action_unknown: "未知的物品操作"
item_action_execute_fail: "執行物品操作時發生錯誤。"
item_action_usage_improper: "使用方式不正確。"
item_enchant_missing_args: "缺少附魔名稱或等級。"
item_enchant_invalid: "無效的附魔"
item_enchant_remove_missing: "缺少要移除的附魔名稱。"
item_enchant_action_unknown: "未知的附魔操作。"

data_usage: "使用方式：/pa data <操作> <玩家> [鍵] [值]"
data_missing_key: "缺少鍵名稱。"
data_missing_key_or_value: "缺少鍵名稱或數值。"
data_missing_key_or_expression: "缺少鍵名稱或運算式。"
data_unknown_action: "未知的操作。"
data_player_required: "你必須是玩家。"
data_value: "數值：{0}"
data_set: "已將鍵 '{0}' 的數值設定為 '{1}'（若不存在則建立）。"
data_overwrite: "已將鍵 '{0}' 的數值覆寫為 '{1}'。"
data_math: "已對鍵 '{1}' 執行數學運算 '{0}'。"
data_delete: "已刪除鍵 '{0}'。"
data_clear: "已清除 '{0}' 的所有資料。"

requirement_unknown_tag: "未知的條件需求標籤。"
requirement_data_invalid: "無效的資料需求。使用方式：[data] <鍵> <數量>"
requirement_amount_invalid: "無效的數量。"
requirement_data_read_fail: "無法讀取資料。"
requirement_material_invalid: "無效的材質。"
requirement_material_required: "物品需求必須指定材質。"
requirement_economy_invalid: "無效的經濟系統數值：{0}"
requirement_xp_invalid: "無效的經驗需求。使用方式：[xp] <levels|points> <數量>"
requirement_xp_amount_invalid: "無效的經驗數量。"
requirement_xp_type_invalid: "無效的經驗類型。"
requirement_item_invalid: "無效的物品。"
requirement_source_invalid: "無效的目標，物件必須是玩家或面板。"

sound_no_args: "未提供音效參數。"
sound_play_fail: "播放音效失敗。"
sound_stop_fail: "停止播放音效失敗。"

generate_mode_enabled: "生成模式已啟用。"
generate_mode_expired: "生成模式已到期。"
generate_panel_created: "已產生新的面板檔案。"

plugin_commands: "插件指令："
plugin_reloaded: "插件已重新載入。"
plugin_developer: "開發人員 {0}"
plugin_version: "版本 {0}"

help_open_command: "/pa open <面板> [玩家] "
help_open_description: "開啟一個面板"
help_reload_command: "/pa reload"
help_reload_description: "重新載入所有設定和面板檔案"
help_generate_command: "/pa generate"
help_generate_description: "進入生成模式來建立面板"
help_data_command: "/pa data"
help_data_description: "修改玩家資料"
help_version_command: "/pa version"
help_version_description: "取得插件版本"
help_help_command: "/pa help"
help_help_description: "顯示此說明列表"

dialog_no_buttons: "對話框至少需要一個按鈕"
cooldown_error: "你開啟面板的速度太快了"
teleport_error: "傳送標籤發生錯誤"
require_head_database: "請下載 HeadDatabase 插件才能使用此功能！"
```

</TabItem>
</Tabs>

-----

## 运作原理

- 插件会读取`lang.yml`并使用你翻译的版本。
- 你可以在CommandPanels官网的工具（tools）页面找到语言文件。
- 如果语言文件中缺少一些条目，这些条目会回退到默认的内置语言。

:::tip

要生成新的语言文件，可先将现有`lang.yml`文件进行备份后从目录中移除，通过重载插件（执行命令`/pa reload`）即可。

:::