<template>
  <v-container class="container" fluid>
    <!--primo container per dirgli che voglio una griglia -->
    <form>
      <div style="height:40px"/>
      <v-layout>
        <v-card class="pt-2 pb-4 pr-4" color="#2b2a38" dark>
          <!--card più grande, con bordi e ombre -->
          <v-card-text class="pl-4">
            <h4 class="display-1 font-weight-medium">Contact Us</h4>
          </v-card-text>
          <br>

          <v-layout row>
            <!--<v-card class="pt-2 pb-4 ml-4 mr-4" width="50%" align-left>-->
            <div class="align-center">
              <v-text-field
                v-model="formdata.name"
                class="ml-4"
                type="subject"
                name="Subject"
                label="Name"
                clearable
                solo
              ></v-text-field>
              <br>
              <v-text-field
                v-model="formdata.email"
                class="ml-4"
                type="email"
                name="Email"
                label="Mail"
                clearable
                solo
              ></v-text-field>

              <v-textarea
                v-model="formdata.message"
                class="ml-4"
                name="Message"
                label="Message"
                auto-grow
                value
                clearable
                :rules="rules"
                counter
                maxlength="150"
                solo
              ></v-textarea>
              <br>
            <v-layout row align-center justify-center>
              <v-btn
                class="ma-2"
                :loading="status != 'awaiting submission'"
                :color="color"
                @click="submitForm()"
              >Submit
                <template v-slot:loader>
                  <v-progress-circular
                    v-if="status == 'submitting'"
                    size="25"
                    indeterminate
                    color="white"
                  ></v-progress-circular>
                  <v-text v-else-if="status == 'success'">Sent!</v-text>
                  <v-text v-else-if="status == 'error'">Error!</v-text>
                </template>
              </v-btn>
             </v-layout>
            </div>
          </v-layout>
        </v-card>
        <div style="width:50%"/>

        <v-card align-right color="#2b2a38">
          <img
            src="https://i.ibb.co/8XRBFP7/young-person-playing-with-computer-52683-19376.jpg"
            class="ml-2 mr-1 mt-1 mb-1"
            alt="young-person-playing-with-computer-52683-19376"
          >
        </v-card>
      </v-layout>
    </form>
    <div style="height:60px"/>
  </v-container>
</template>

<script>
export default {
  name: "contactus",
  data() {
    return {
      rules: [v => v.length <= 150],
      sitekey: "3effBJbnsvuJLBEHE5Jpra8ELWMoWVYQ",
      formname: "default",
      formdata: {
        name: "",
        email: "",
        message: ""
      },
      status: "awaiting submission",
      color: "primary"
    };
  },
  methods: {
    submitForm() {
      this.status = "submitting";
      Pageclip.send(
        this.sitekey,
        this.formname,
        this.formdata,
        (error, response) => {
          console.log(response);
          if (response) this.status = this.color = "success";
          else this.status = this.color = "error";
        }
      );
    }
  }
};
</script>

<style>
.v-text-field {
  width: 400px;
}
</style>
