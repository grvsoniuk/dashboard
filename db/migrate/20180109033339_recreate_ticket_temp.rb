class RecreateTicketTemp < ActiveRecord::Migration[5.0]
  def up
    ActiveRecord::Base.connection.execute("DROP TABLE if exists ticket_temps;")
    ActiveRecord::Base.connection.execute("CREATE TABLE ticket_temps LIKE tickets;")
  end

  def down
    ActiveRecord::Base.connection.execute("DROP TABLE if exists ticket_temps;")
  end
end
