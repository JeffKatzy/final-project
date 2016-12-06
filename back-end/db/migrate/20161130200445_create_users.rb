class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.integer :playlist_id
      t.string :email
      t.string :password_digest
    end
  end
end
