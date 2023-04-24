class TicketTemp < ApplicationRecord
  self.inheritance_column = 'ticket_type'
  before_save :update_weight
  
  private
  def update_weight
    TicketTemp.record_timestamps=false
    self.weight = (self.priority.blank? || self.status.blank? || ((self.status == Ticket::STATUS_PENDING or self.status == Ticket::STATUS_ON_HOLD) and self.updated_at <= 1.week.ago)) ? 0 : Ticket::PRIORITY_HEAT[self.priority]*Ticket::STATUS_HEAT[self.status]
  end
end
