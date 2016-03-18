def main_menu
  puts "(b) - basic_calculator"
  puts "(a) - advanced_calculator"
  puts "(q) - quit"
end

def get_user_selection(message)
  print message
  gets.chomp
end

###############################################################################

def basic_calculator
  puts "would you like to solve an addition, subtraction, multiplication or division problem? (a,s,m,d)?"
  operation_selection = gets.downcase.chomp

  if operation_selection == ("a")
    operation = "addition"
  elsif operation_selection == ("s")
    operation = "subtraction"
  elsif operation_selection == ("m")
    operation = "multiplication"
  elsif operation_selection == ("d")
    operation = "division"
  else
    operation = "invalid operation_selection, type again : "
  end

   puts "what is the first number you would like to have  " + operation_selection + " operated by the second number"
   a = gets.to_i
   puts "what is the second number you would like to have " + operation_selection + " operated by the first number"
   b = gets.to_i

   result = a + b if operation == "addition"
   result = a - b if operation == "subtraction"
   result = a * b if operation == "multiplication"
   result = a / b if operation == "division"

   puts "your answer is = " + result.to_s

end #end basic_calculator


###############################################################################


def advanced_calculator
    puts "advanced calculator function: would you like to operate using square roots or exponents (s / e)?"
  operation_selection = gets.downcase.chomp

  if operation_selection == "s"
    operation = "squareroot"
  elsif operation_selection == "e"
    operation = "exponents"
  else
    puts "wrong input please enter again"
    advanced_calculator
  end

  if operation_selection == "s"
    puts "what is the number you would like to find the square root of?"
    a = gets.to_i
  else operation_selection == "e"
    puts "what is the first number you would like to have an " + operation + " operated on?"
    a = gets.to_i
    puts "what is the second number you would like to have the " + a.to_s + " find the " + operation + " of?"
    b = gets.to_i
  end

  result = Math.sqrt(a) if operation == "squareroot"
  result = a ** b if operation == "exponents"

  puts "your answer is = " + result.to_s + "\n";

end # end advanced_calculator

###############################################################################

main_menu
menu_choice= get_user_selection("Pleae enter you selection: ").downcase

until menu_choice == 'q'
  case menu_choice
  when 'b'
    basic_calculator
  when 'a'
    advanced_calculator
  else
  puts "Invalid selection"
  end #end case loop

  main_menu
  menu_choice = get_user_selection("Please enter your selection: ").downcase
end # end until loop
