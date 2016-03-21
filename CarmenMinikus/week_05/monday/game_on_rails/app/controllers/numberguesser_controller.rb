class NumberguesserController < ApplicationController

  def form
  end

  def results
    computer_num = rand(0..5)
    if params[:guessed_number] == computer_num.to_s
      @output = "Correct! the computer guessed " + computer_num.to_s
    else
      @output = "Wrong! the computer guessed " + computer_num.to_s
    end
  end

end
