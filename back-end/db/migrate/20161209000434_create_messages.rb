class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :group_id
      t.integer :user_id
      t.text :text 
    end
  end
end
