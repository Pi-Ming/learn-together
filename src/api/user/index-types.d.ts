declare namespace API {
  namespace Permission {
    interface Info {
      /**
       * 该权限配置的主键
       *  */
      id: number
      /**
       * 用户名，如guxh
       *  */
      user: string
      /**
       * 权限类型
       *  */
      type: number
      /**
       * 权限中文说明
       *  */
      desc: string
    }
    interface PermissionInput {
      /**
       * 用户名，不填时查询全部人的权限
       */
      username?: string
    }
    type PermissionOutput = Permission.Info[]
  }

  namespace Login {
    interface LoginInput {
      username: string
      password: string
    }
  }
}
