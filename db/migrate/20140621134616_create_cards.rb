class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :text
      t.string :type

      t.timestamps
    end
  end
end
