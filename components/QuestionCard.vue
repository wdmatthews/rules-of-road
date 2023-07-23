<template>
  <v-card>
    <v-img
      v-show="question.image"
      class="mx-auto"
      height="200"
      contain
      :src="question.image"
    />
    <v-card-title class="text-h3">
      {{ question.title }}
    </v-card-title>
    <v-card-text class="grey lighten-3 pa-4">
      <v-radio-group
        v-model="selected"
        hide-details
        class="mt-0"
        style="overflow: auto; max-height: 40vh;"
        @change="$emit('change', selected)"
      >
        <v-radio
          v-for="(choice, i) in question.choices"
          :key="`choice-${i}`"
          :value="choice"
        >
          <template #label>
            <div class="text-h5 black--text">
              {{ choice }}
            </div>
          </template>
        </v-radio>
      </v-radio-group>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="error"
        x-large
        :style="questionNumber === 1 ? 'visibility: hidden;' : ''"
        @click="$emit('back')"
      >
        Back
      </v-btn>
      <v-spacer />
      <span class="text-h5">{{ questionNumber }} out of {{ questionCount }}</span>
      <v-spacer />
      <v-btn
        color="primary"
        x-large
        :style="selected ? '' : 'visibility: hidden;'"
        @click="$emit('next')"
      >
        {{ questionNumber === questionCount ? 'Review' : 'Next' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      default: () => ({}),
    },
    selectedChoice: {
      type: String,
      default: '',
    },
    questionNumber: {
      type: Number,
      default: 1,
    },
    questionCount: {
      type: Number,
      default: 1,
    },
  },
  data: vm => ({
    selected: '',
  }),
  watch: {
    selectedChoice(value) {
      this.selected = value
    },
  },
}
</script>
