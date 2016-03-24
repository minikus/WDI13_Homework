# == Schema Information
#
# Table name: books
#
#  id    :integer          not null, primary key
#  title :text
#  year  :text
#  genre :text
#  image :text
#

class Book < ActiveRecord::Base
  belongs_to :author
end
