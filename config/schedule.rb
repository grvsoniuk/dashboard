# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/dashboard/cron.log"

every 5.minutes do
  runner "TicketWorker.perform_async"
end
every 6.hours do
  runner "AgentWorker.perform_async"
end
every 24.hours do
  runner "TicketAllWorker.perform_async"
end
every 12.day do
  runner "OrganisationWorker.perform_async"
end
every 24.hours do
  runner "TicketAllWorker.perform_async"
end

# Learn more: http://github.com/javan/whenever
