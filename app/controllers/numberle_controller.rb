class NumberleController < ApplicationController
  def index
    reset_game!
  end

  def guess
    # session[:attempts] += 1
    @guess = params[:guess].join

    feedback = compute_feedback(params[:guess], session[:answer])

    session[:guesses] ||= []
    session[:guesses] << { "value" => params[:guess], "feedback" => feedback }

    render :index
  end

  private

  def reset_game!
    session[:answer] = Array.new(8) { rand(0..9).to_s }.join
    # session[:attempts] = 0
    session[:guesses] = []
  end

  def compute_feedback(guess, answer)
    guessed_numbers = guess.dup
    answer_numbers = answer.chars.dup
    feedback = Array.new(8)

    # first pass: green
    guessed_numbers.each_with_index do |number, i|
      if number == answer_numbers[i]
        feedback[i] = "green"
        guessed_numbers[i] = nil
        answer_numbers[i] = nil
      end
    end

    # second pass: yellow/grey
    guessed_numbers.each_with_index do |number, i|
      next if number.blank?

      answer_index = answer_numbers.index(number)
      if answer_index
        feedback[i] = "yellow"
        answer_numbers[answer_index] = nil
      else
        feedback[i] = "gray"
      end
    end

    feedback
  end
end
