package io.metersphere.system.dto.response;

import io.metersphere.system.domain.Organization;
import io.metersphere.system.domain.User;
import io.metersphere.system.domain.UserRole;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.List;

@Data
public class UserInfo extends User {
    @Schema(title = "用户所属组织")
    List<Organization> organizationList;
    @Schema(title = "用户所属用户组")
    List<UserRole> userRoleList;
}