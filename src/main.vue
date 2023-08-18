<template id="main">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Popover</div>
      <div class="right">
        <v-ons-toolbar-button @click="showPopover($event, 'down', true)">
          <v-ons-icon v-if="$ons.platform.isAndroid()" icon="md-more-vert"></v-ons-icon>
          <span v-else> Click me </span>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>

    <div style="height: 100%; display: flex; flex-direction: column">
      <div style="height: 100%; margin: 1em 0; display: flex; justify-content: space-around">
        <v-ons-button @click="showPopover($event, 'right')" style="align-self: flex-start">Click me1</v-ons-button>
        <v-ons-button @click="showPopover($event, 'up')" style="align-self: center">Click me</v-ons-button>
        <v-ons-button @click="showPopover($event, 'left')" style="align-self: flex-end">Click me</v-ons-button>
      </div>
    </div>

    <v-ons-popover
      cancelable
      :visible="popoverVisible"
      :target="popoverTarget"
      @update:visible="cancel"
    >
      <p style="text-align: center">Lorem ipsum</p>
    </v-ons-popover>
  </v-ons-page>
</template>

<script>
export  default  {
  data() {
    return {
      popoverVisible: false,
      popoverTarget: null,
      popoverDirection: 'up',
      coverTarget: false
    };
  },
  methods: {
    showPopover(event, direction, coverTarget = false) {
      this.popoverTarget = event;
      console.log(this.popoverTarget, 'target')
      this.popoverDirection = direction;
      this.coverTarget = coverTarget;
      this.popoverVisible = true;
    },
    cancel(event) {
      console.log(event, 'event')
      this.popoverVisible = event
    }
  }

}
</script>
