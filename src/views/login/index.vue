<template>
  <div class="main">
    <div class="mid-card">
      <!-- <img src="@/assets/images/logo.png" /> -->
      <a-input v-model:value="username" placeholder="请输入用户名" />
      <a-input v-model:value="password" type="password" placeholder="请输入密码" />
      <a-button type="primary" @click="onLogin">登录</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { login } from '@/api/user/index'
import { encrypt } from '@/utils/crypto'
import router from '@/router'

export default defineComponent({
  setup() {
    const state = reactive({
      username: 'Tamu',
      password: '123456'
    })
    const onLogin = async () => {
      try {
        const data = await login({ username: state.username, password: encrypt(state.password) })
        console.log(data)
        router.push('/home')
      } catch (e) {
        console.log(e)
      }
    }

    return {
      ...toRefs(state),
      onLogin
    }
  }
})
</script>

<style lang="less" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/login-bg.jpg') center;

  .mid-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 800px;
    height: 500px;
    padding: 100px;
    background-color: #fff;

    img {
      width: 300px;
      height: 84px;
    }

    input,
    button {
      width: 340px;
    }
  }
}
</style>
