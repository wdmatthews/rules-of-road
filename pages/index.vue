<template>
  <v-row
    justify="center"
    align="center"
    style="height: 100%;"
  >
    <v-col cols="10">
      <QuestionCard
        v-show="!isReviewing && !isFinished"
        :question="currentQuestion"
        :selected-choice="currentQuestion.selected"
        :question-number="currentQuestionIndex + 1"
        :question-count="questions.length"
        @change="currentQuestion.selected = $event"
        @back="previousQuestion"
        @next="nextQuestion"
      />
      <v-card v-show="isReviewing && !isFinished">
        <v-card-title>
          <span class="mx-auto text-h3">Review Your Answers</span>
        </v-card-title>
        <v-card-text
          class="grey lighten-3 pa-4"
          style="overflow: auto; max-height: 75vh;"
        >
          <v-list-item
            v-for="(question, i) in questions"
            :key="`review-${i}`"
            three-line
          >
            <v-list-item-content>
              <v-list-item-title class="text-h4 black--text">
                {{ i + 1 }}. {{ question.title }}
              </v-list-item-title>
              <v-list-item-avatar
                v-show="question.image"
                tile
                height="200px"
              >
                <v-img contain :src="question.image" />
              </v-list-item-avatar>
              <v-list-item-subtitle class="text-h5 black--text">
                {{ question.selected }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="error"
            x-large
            @click="isReviewing = false"
          >
            Back
          </v-btn>
          <v-spacer />
          <v-btn
            color="primary"
            x-large
            @click="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-show="isFinished">
        <v-card-title>
          <span class="mx-auto text-h3">Results</span>
        </v-card-title>
        <p class="text-h5 text-center">
          You got {{ score }} out of {{ questions.length }}
        </p>
        <v-card-text
          class="grey lighten-3 pa-4 text-center black--text"
          style="overflow: auto; max-height: 70vh;"
        >
          <v-list-item
            v-for="(question, i) in questions"
            :key="`review-${i}`"
            three-line
          >
            <v-list-item-content>
              <v-list-item-title class="text-h4 black--text">
                <v-chip
                  label
                  large
                  class="text-h5"
                  :color="question.selected === question.correct ? 'success' : 'error'"
                >
                  {{ question.selected === question.correct ? 'Correct' : 'Incorrect' }}
                </v-chip>
                {{ i + 1 }}. {{ question.title }}
              </v-list-item-title>
              <v-list-item-avatar
                v-show="question.image"
                tile
                height="200px"
              >
                <v-img contain :src="question.image" />
              </v-list-item-avatar>
              <v-list-item-subtitle class="text-h5 black--text">
                <p>You Selected: {{ question.selected }}</p>
                <p class="mb-0">
                  The Correct Answer: {{ question.correct }}
                </p>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            x-large
            @click="initialize"
          >
            Try Again
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import questions from '~/assets/data/questions'

for (const question of questions) {
  question.choices = []
  question.selected = ''
}

export default {
  data: vm => ({
    questions,
    currentQuestionIndex: 0,
    selectedChoice: '',
    isReviewing: false,
    isFinished: false,
    score: 0,
  }),
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex]
    },
    lastQuestion() {
      return this.currentQuestionIndex === this.questions.length - 1
    },
  },
  mounted() {
    this.initialize()
  },
  methods: {
    // From https://stackoverflow.com/a/2450976
    shuffle(array) {
      let currentIndex = array.length
      let randomIndex
      
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]]
      }
      
      return array
    },
    initialize() {
      for (const question of this.questions) {
        question.choices = [question.correct, ...question.incorrect]
        this.shuffle(question.choices)
        question.selected = ''
      }
      
      this.shuffle(this.questions)
      this.questions = [...this.questions]
      this.currentQuestionIndex = 0
      this.isReviewing = false
      this.isFinished = false
    },
    previousQuestion() {
      this.currentQuestionIndex--
    },
    nextQuestion() {
      if (this.lastQuestion) {
        this.isReviewing = true
      } else {
        this.currentQuestionIndex++
      }
    },
    submit() {
      let score = 0
      
      for (const question of this.questions) {
        if (question.selected === question.correct) {
          score++
        }
      }
      
      this.score = score
      this.isFinished = true
    },
  },
}
</script>

<style>
* {
  word-break: break-word !important;
}
</style>
