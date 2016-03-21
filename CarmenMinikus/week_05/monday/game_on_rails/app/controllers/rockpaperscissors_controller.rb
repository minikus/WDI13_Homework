class RockpaperscissorsController < ApplicationController
  def form
  end

  def results
    @move = params[:move].downcase

    random_num = rand(1..3)
    possible_moves = {
      1 => "rock",
      2 => "paper",
      3 => "scissors"
    }
    @computer_move = possible_moves[random_num]

      if @move == "rock"
        if @computer_move == "paper"
           @winner = "Computer wins!"
        else @computer_move == "scissors"
           @winner = "You win!"
        end
      elsif @move == "paper"
        if @computer_move == "rock"
           @winner = "You win!"
        else @computer_move == "scissors"
           @winner = "Computer wins!"
        end
      elsif @move == "scissors"
        if @computer_move == "rock"
           @winner = "Computer wins!"
        else @computer_move == "paper"
           @winner = "You win!"
        end
      else
         @winner = "Its a tie!"
      end


  end

end
