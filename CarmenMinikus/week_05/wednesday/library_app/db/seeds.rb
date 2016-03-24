Book.destroy_all
Book.create(:title => 'The Idiot', :year => 1869, :genre => 'Philosophical fiction', :image => 'http://images.bookcrossing.com/images/journalpics/857/11/cover/300_8576511.jpg')

Author.destroy_all
Author.create(:name => 'Fyodor Dostoevsky', :dob => '1968', :nationality => 'Russian', :image =>  'https://img.washingtonpost.com/rw/2010-2019/WashingtonPost/2012/08/14/Style/Images/dostoevsky_portrait.jpg?uuid=orf2eOY1EeGHQZQOP22_SA')
