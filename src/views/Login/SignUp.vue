<template lang="">
  <div class="login-wrapper">
    <form @submit.prevent="handleSubmit">
      <div class="form-content-wrapper">
        <div class="wrapper-become-member">
          <p>Become a member! Don't miss offers and bonus check's</p>
        </div>
        <div class="wrapper-email">
          <label>E-Mail</label>
          <input v-model="email" required />
          <p v-if="emailError">{{ emailError }}</p>
        </div>
        <div class="wrapper-password">
          <label>Password</label>
          <input type="password" v-model="password" required />
          <p v-if="passwordError">{{ passwordError }}</p>
        </div>
        <div>
          <div class="wrapper-remember">
            <div class="wrapper-checkbox">
              <label>Remember me</label>
              <input type="checkbox" v-model="rememberMe" />
            </div>
            <div class="wrapper-forgot-password">
              <router-link class="link" to="/Shop">
                <p>Forgotten password</p></router-link
              >
            </div>
          </div>
        </div>

        <div class="wrapper-buttons">
          <button class="sign-in" type="submit">Sign in</button>
          <button class="sign-up">Sign up</button>
        </div>
        <div class="wrapper-membership">
          <router-link class="link" to="/Shop">
            <p>About the membership</p></router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkbox: false,
      emailError: "",
      passwordError: "",
      email: "",
      password: "",
      rememberMe: false,
    };
  },

  methods: {
    validationEmail() {
      this.emailError =
        this.email.length > 5
          ? ""
          : "Your email must contain 6 at least characters.";
    },

    validationPassword() {
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Your password must contain 6 at least characters.";
    },

    handleSubmit() {
      this.validationEmail();
      this.validationPassword();
    },
  },
};
</script>
<style lang="scss">
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

form {
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-content-wrapper {
    margin: 2rem;
  }

  .wrapper-email,
  .wrapper-password,
  .wrapper-remember,
  .wrapper-membership,
  .wrapper-buttons,
  .wrapper-forgot-password,
  .wrapper-become-member {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }

  button {
    margin-bottom: 1rem;
  }

  input,
  button {
    height: 2rem;
  }
  a {
    color: black;
    font-size: 14px;
  }

  .sign-in {
    background: black;
    color: white;
    border: black;
    outline: black;
    font-weight: bold;
  }

  .sign-up {
    background: white;
    color: blacK;
    border: 1px solid black;
    font-weight: bold;
  }

  .wrapper-remember {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    label {
      margin-right: 5px;
      align-items: baseline;
    }
  }

  .wrapper-checkbox {
    display: flex;
    align-items: center;
  }
}
</style>
