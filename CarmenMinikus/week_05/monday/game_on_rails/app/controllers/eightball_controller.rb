class EightballController < ApplicationController

  def form
  end

  def results
  computer_ans = rand(1..10)
  possible_answers = {
    1 => "It is certain",
    2 => "Without a doubt",
    3 => "Outlook good",
    4 => "Yes",
    5 => "Signs point to yes",
    6 => "Reply hazy try again",
    7 => "Ask again later",
    8 => "My sources say no",
    9 => "Outlook not so good",
    10 => "Very doubtful"
  }
  @response = possible_answers[computer_ans]
  end

end
