// 用例管理列表
export const GetCaseListUrl = '/functional/case/page';
// 用例管理-添加
export const CreateCaseUrl = '/functional/case/add';
// 用例管理-更新
export const UpdateCaseUrl = '/functional/case/update';
// 用例管理-删除
export const DeleteCaseUrl = '/functional/case/delete';
// 用例管理-详情
export const DetailCaseUrl = '/functional/case/detail';
// 用例管理-批量移动用例
export const BatchMoveCaseUrl = '/functional/case/batch/move';
// 用例管理-批量删除用例
export const BatchDeleteCaseUrl = '/functional/case/batch/delete-to-gc';
// 用例管理-批量删除用例
export const BatchEditCaseUrl = '/functional/case/batch/edit';
// 用例管理-批量复制
export const BatchCopyCaseUrl = '/functional/case/batch/copy';
// 用例管理-关注/取消关注用例
export const FollowerCaseUrl = '/functional/case/edit/follower';
// 获取用例关注人
export const GetCaseFollowerUrl = '/functional/case/follower';
// 获取用例模板自定义字段
export const GetCaseCustomFieldsUrl = '/functional/case/default/template/field';
// 获取表头自定义字段（高级搜索中的自定义字段）
export const GetSearchCustomFieldsUrl = '/functional/case/custom/field';
// 关联文件列表
export const GetAssociatedFilePageUrl = '/attachment/page';

// 获取模块树
export const GetCaseModuleTreeUrl = '/functional/case/module/tree';
// 创建模块树
export const CreateCaseModuleTreeUrl = '/functional/case/module/add';
// 更新模块树
export const UpdateCaseModuleTreeUrl = '/functional/case/module/update';
// 移动模块
export const MoveCaseModuleTreeUrl = '/functional/case/module/move';
// 回收站-模块-获取模块树
export const GetTrashCaseModuleTreeUrl = '/functional/case/module/trash/tree';
// 删除模块
export const DeleteCaseModuleTreeUrl = '/functional/case/module/delete';
// 获取默认模版自定义字段
export const GetDefaultTemplateFieldsUrl = '/functional/case/default/template/field';

// 回收站

// 回收站分页
export const GetRecycleCaseListUrl = '/functional/case/trash/page';
// 获取回收站模块数量
export const GetRecycleCaseModulesCountUrl = '/functional/case/trash/module/count';
// 获取全部用例模块数量
export const GetCaseModulesCountUrl = '/functional/case/module/count';
// 恢复回收站用例表
export const RestoreCaseListUrl = '/functional/case/trash/batch/recover';
// 批量彻底删除回收站用例表
export const BatchDeleteRecycleCaseListUrl = '/functional/case/trash/batch/delete';
// 恢复回收站单个用例
export const RecoverRecycleCaseListUrl = '/functional/case/trash/recover';
// 删除回收站单个用例
export const DeleteRecycleCaseListUrl = '/functional/case/trash/delete';

export default {};