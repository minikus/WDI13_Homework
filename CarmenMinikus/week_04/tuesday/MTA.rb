require 'pry'

STATIONS = {
  'N' => %w{ Times_Square 34th 28th 23rd Union_Square 8th },
  'L' => %w{ 8th 6th Union_Square 3rd 1st },
  'Six' => %w{ Grand_Central 33rd 28th 23rd Union_Square Astor_Place}
}

num_stops = 0

print "Which Line will you be boarding the train?: "
start_line = STATIONS[gets.chomp] #the key is passed

print "Which stop will you board at?: "
start_station = gets.chomp

print "Which Line are you getting off at?: "
end_line = STATIONS[gets.chomp]

print "Which station are getting off at?: "
end_station = gets.chomp

start_index = start_line.index start_station
start_US_index = start_line.index "Union_Square"
end_index = end_line.index end_station
end_US_index = end_line.index "Union_Square"

stopping_through = []

  if start_index <= start_US_index
    stopping_through << start_line[start_index..start_US_index]
  else
    stopping_through << start_line[start_US_index..start_index].reverse!
end

  if end_index <= end_US_index
    stopping_through << end_line[end_index..end_US_index].reverse!
  else
    end_US_index = end_US_index + 1
    stopping_through << end_line[end_US_index..end_index].shift
end

# stopping_through.delete_if { |i| i.length <1 } #curly brackets replaces the do
stopping_through.delete_if do |i|
  i.length < 1
end

stopping_through.flatten!
num_stops = stopping_through.length

puts "you will be stopping through " + stopping_through.to_s + ". Don't forget to change at Union Square!."
puts "you will stop through a total of " + (num_stops).to_s + " station(s)"

binding.pry
