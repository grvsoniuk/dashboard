# README

The tool is designed to show a snapshot of overall load across Customer Support all offices and teams. The project is pretty naive at the moment but can give a snapshot where bulk of the tickets are.

At the moment it can:
1. Manage Teams (need Admin permission) 
2. Manage Offices (need Admin permission) 
3. Manage Agents (need Admin permission) 
4. Manage Dashboard Users (need Admin permission) 
5. System Audit (need Admin permission) 
6. Register/Login Users
7. Manually add Agents as Users in CS Dashboard (need Admin permission)
8. Map Agent with his/her region and team (need Moderator permission) 
9. Updates tickets every 15 minutes*
10. Updates agents every 12 hours*
11. Updates organizations every 6 hours*
12. Manually update Teams, Agents and Organizations (need Admin permission) 
13. Search tickets by:
  a. Offices
  b. Teams
  c. Priority [Urgent, High, Normal, Low]
  d. Status [Open, Pending, On-Hold]
14. Save searches. (Scope: User)
15. Make a saved search as user's default search.
16. Auto-Refresh searches at set intervals.

*There are scheduled cron job that does the updates.

URL: http://devtool1.ops.appdynamics.com:3000/ [Needs to be on Appdynamics VPN]
WIKI: https://singularity.jira.com/wiki/spaces/~gaurav.soni/pages/297928335/Customer+Support+Dashboard

You can register with your Appdynamics Email ID. 
Users can be admins but at the moment I have to update them manually in db, so let me now. In next update, I will allow admin to create more admins via 'Manage Agents'(or Manage User)
