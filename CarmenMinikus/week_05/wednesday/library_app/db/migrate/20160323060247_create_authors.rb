class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.text :name
      t.text :dob
      t.text :nationality
      t.text :image
    end
  end
end
