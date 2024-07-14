<template>
  <div class="personal">
    <div class="personal-header">
      <div class="header-left">
        <span>个人中心</span>
      </div>
      <div class="header-right">
        <div>{{ username }}</div>
        <a-popover title="Title" trigger="hover">
          <template #content>
            <span>退出登录</span>
          </template>
          <img src="@/assets/images/dog-img.jpg" alt="" />
        </a-popover>
      </div>
    </div>
    <div class="personal-container">
      <div class="container-top">
        <img src="@/assets/images/dog-img.jpg" alt="" />
        <div class="container-message">
          <div>
            <span style="margin-right: 10px">{{ username }}</span>
            <a-tag color="pink">管理者</a-tag>
            <a-tag color="red">公共开发事业部</a-tag>
            <a-tag color="orange">VIP</a-tag>
            <a-tag color="green">idol</a-tag>
          </div>
          <div>爱好:唱跳rap</div>
          <div>签名:练习时长两年半的个人练习生</div>
        </div>
      </div>
      <div class="container-show">
        <div class="container-left">
          <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
          <div class="container-left-show">
            <template v-for="(item, index) in cardShow" :key="index">
              <a-card :title="item.title">
                <template #extra><a href="#">详细信息</a></template>
                <p>{{ index + '' + item.content }}</p>
                <p>{{ item.content }}</p>
                <p>{{ item.content }}</p>
              </a-card>
              <br />
            </template>
          </div>
        </div>
        <div class="container-right">
          <div class="container-right-title">基本信息</div>
          <div v-for="(item, index) in personalMsg" :key="index" class="container-right-message">
            <span class="span-label">{{ item.label }}: </span>
            <a-tag v-if="index === 0" color="green">{{ item.message }}</a-tag>
            <a-tag v-else-if="index === 1" color="red">{{ item.message }}</a-tag>
            <span v-else-if="item.message.length < 40">{{ item.message }}</span>
            <a-tooltip v-else placement="bottomLeft" :title="item.message" arrow-point-at-center>
              <span class="span-message">{{ item.message }}</span>
            </a-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { MenuProps } from 'ant-design-vue'
const current = ref<string[]>(['project'])
const username = ref<string>('椰爷也叶')
const items = ref<MenuProps['items']>([
  {
    key: 'project',
    label: '项目管理',
    title: '项目管理'
  },
  {
    key: 'resource',
    label: '资源管理',
    title: '资源管理'
  },
  {
    key: 'work',
    label: '代办事务',
    title: '代办事务'
  },
  {
    key: 'permission',
    label: '已有权限',
    title: '已有权限'
  },
  {
    key: 'message',
    label: '个人信息',
    title: '个人信息'
  }
])
const personalMsg = ref([
  {
    label: '所在部门',
    message: '公共开发事业部'
  },
  {
    label: '岗位名称',
    message: 'Web前端开发'
  },
  {
    label: '联系电话',
    message: '13212345678'
  },
  {
    label: '电子邮件',
    message: '1234xxxx@qq.com'
  },
  {
    label: '专业技能',
    message: 'HTML、Css、JS'
  },
  {
    label: '获得证书',
    message:
      '大学英语4级;大学英语6级;大学英语7级;大学英语8级;大学英语9级;大学英语10级;大学英语11级;大学英语12级;大学英语13级;'
  }
])

const cardShow = ref([
  {
    title: '测试Title1',
    content: '测试内容11'
  },
  {
    title: '测试Title2',
    content: '测试内容22'
  },
  {
    title: '测试Title3',
    content: '测试内容33'
  },
  {
    title: '测试Title4',
    content: '测试内容44'
  },
  {
    title: '测试Title5',
    content: '测试内容55'
  },
  {
    title: '测试Title5',
    content: '测试内容55'
  },
  {
    title: '测试Title5',
    content: '测试内容55'
  },
  {
    title: '测试Title5',
    content: '测试内容55'
  }
])
</script>

<style lang="less" scoped>
.personal {
  width: 100%;
  .personal-header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    font-weight: 800;
    .header-right {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 20px;
      }
    }
  }
  .personal-container {
    padding: 60px 20px 20px 20px;
    background-color: #e8e8e8;
    height: calc(100vh - 170px);
    .container-top {
      margin: 0 auto;
      padding: 10px;
      width: calc(65% + 40px);
      background-color: #fff;
      margin-bottom: 20px;
      border-radius: 5px;
      position: relative;
      img {
        position: absolute;
        top: -40px;
        width: 100px;
        height: 100px;
        border: 5px solid #eee;
        border-radius: 50%;
      }
      .container-message {
        margin-left: 130px;
        font-size: 20px;
        font-weight: 600;
        div {
          margin-bottom: 10px;
        }
      }
    }
    .container-show {
      display: flex;
      justify-content: center;
      .container-left {
        width: 50%;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        margin-right: 20px;
        .container-left-show {
          margin-top: 20px;
          padding: 10px;
          height: 68vh;
          overflow-x: hidden;
        }
      }
      .container-right {
        width: 15%;
        border-radius: 5px;
        background-color: #fff;
        padding: 20px 10px;
        height: 400px;
        .container-right-title {
          font-size: 20px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 10px;
        }
        .container-right-message {
          margin-bottom: 15px;
          font-size: 18px;
          span {
            font-size: 16px;
          }
          .span-label {
            font-weight: 600;
            margin-bottom: 8px;
            display: block;
          }
          .span-message {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
          }
        }
      }
    }
  }
  /* 滚动条整体样式 */
  ::-webkit-scrollbar {
    width: 6px;
    height: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
  }

  /* 滚动条thumb(滑块)样式 */
  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 10px;
    // background-color: #9a9a9a;
    background-color: rgb(64, 158, 255);
    border-radius: 5px;
  }

  /* 滚动条hover状态下thumb(滑块)样式 */
  ::-webkit-scrollbar-thumb:hover {
    // background-color: #555;
    background-color: rgb(0, 132, 255);
  }

  /* 滚动条上下箭头样式 */
  ::-webkit-scrollbar-button {
    background-color: #ccc;
    display: none;
  }

  /* 滚动条左右箭头样式 */
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-add-button {
    display: none;
  }

  ::-webkit-scrollbar-button:end:increment,
  ::-webkit-scrollbar-sub-button {
    display: none;
  }
}
</style>
