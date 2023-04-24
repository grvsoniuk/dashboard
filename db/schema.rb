# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20181206163500) do

  create_table "agents", id: :bigint, default: nil, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.text     "url",                     limit: 65535
    t.string   "name"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "time_zone"
    t.string   "phone"
    t.string   "shared_phone_number"
    t.text     "photo",                   limit: 65535
    t.bigint   "locale_id"
    t.string   "locale"
    t.bigint   "organization_id"
    t.string   "role"
    t.boolean  "verified"
    t.bigint   "external_id"
    t.text     "tags",                    limit: 65535
    t.string   "alias"
    t.boolean  "active"
    t.boolean  "shared"
    t.boolean  "shared_agent"
    t.datetime "last_login_at"
    t.boolean  "two_factor_auth_enabled"
    t.text     "signature",               limit: 65535
    t.text     "details",                 limit: 65535
    t.text     "notes",                   limit: 65535
    t.bigint   "custom_role_id"
    t.boolean  "moderator"
    t.boolean  "ticket_restriction"
    t.boolean  "only_private_comments"
    t.boolean  "restricted_agent"
    t.boolean  "suspended"
    t.boolean  "chat_only"
    t.text     "user_fields",             limit: 65535
    t.integer  "team_id"
    t.integer  "office_id"
    t.integer  "default_group_id"
    t.string   "result_type"
  end

  create_table "audits", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.bigint   "auditable_id"
    t.string   "auditable_type"
    t.bigint   "associated_id"
    t.string   "associated_type"
    t.bigint   "user_id"
    t.string   "user_type"
    t.string   "username"
    t.string   "action"
    t.text     "audited_changes", limit: 65535
    t.bigint   "version",                       default: 0
    t.string   "comment"
    t.string   "remote_address"
    t.string   "request_uuid"
    t.datetime "created_at"
    t.index ["associated_id", "associated_type"], name: "associated_index", using: :btree
    t.index ["auditable_id", "auditable_type"], name: "auditable_index", using: :btree
    t.index ["created_at"], name: "index_audits_on_created_at", using: :btree
    t.index ["request_uuid"], name: "index_audits_on_request_uuid", using: :btree
    t.index ["user_id", "user_type"], name: "user_index", using: :btree
  end

  create_table "offices", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "organizations", id: :bigint, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.string   "url"
    t.string   "external_id"
    t.string   "name"
    t.text     "domain_names",        limit: 65535
    t.text     "details",             limit: 65535
    t.text     "notes",               limit: 65535
    t.integer  "group_id"
    t.boolean  "shared_tickets"
    t.boolean  "shared_comments"
    t.text     "tags",                limit: 65535
    t.text     "organization_fields", limit: 65535
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  create_table "saved_searches", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.string   "name"
    t.text     "query",      limit: 65535
    t.integer  "user_id"
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
    t.boolean  "is_default",               default: true
  end

  create_table "teams", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ticket_temps", id: :bigint, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.text     "url",                   limit: 65535
    t.bigint   "external_id"
    t.text     "via",                   limit: 65535
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "type"
    t.text     "subject",               limit: 65535
    t.text     "raw_subject",           limit: 65535
    t.text     "description",           limit: 65535
    t.string   "priority"
    t.string   "status"
    t.text     "recipient",             limit: 65535
    t.bigint   "requester_id"
    t.bigint   "submitter_id"
    t.bigint   "assignee_id"
    t.bigint   "organization_id"
    t.bigint   "group_id"
    t.text     "collaborator_ids",      limit: 65535
    t.bigint   "forum_topic_id"
    t.bigint   "problem_id"
    t.boolean  "has_incidents"
    t.boolean  "is_public"
    t.datetime "due_at"
    t.text     "tags",                  limit: 65535
    t.text     "custom_fields",         limit: 65535
    t.text     "satisfaction_rating",   limit: 65535
    t.text     "sharing_agreement_ids", limit: 65535
    t.text     "fields",                limit: 65535
    t.text     "followup_ids",          limit: 65535
    t.bigint   "ticket_form_id"
    t.bigint   "brand_id"
    t.boolean  "allow_channelback"
    t.string   "result_type"
    t.integer  "weight",                              default: 0
    t.text     "email_cc_ids",          limit: 65535
  end

  create_table "tickets", id: :bigint, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.text     "url",                   limit: 65535
    t.bigint   "external_id"
    t.text     "via",                   limit: 65535
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "type"
    t.text     "subject",               limit: 65535
    t.text     "raw_subject",           limit: 65535
    t.text     "description",           limit: 65535
    t.string   "priority"
    t.string   "status"
    t.text     "recipient",             limit: 65535
    t.bigint   "requester_id"
    t.bigint   "submitter_id"
    t.bigint   "assignee_id"
    t.bigint   "organization_id"
    t.bigint   "group_id"
    t.text     "collaborator_ids",      limit: 65535
    t.bigint   "forum_topic_id"
    t.bigint   "problem_id"
    t.boolean  "has_incidents"
    t.boolean  "is_public"
    t.datetime "due_at"
    t.text     "tags",                  limit: 65535
    t.text     "custom_fields",         limit: 65535
    t.text     "satisfaction_rating",   limit: 65535
    t.text     "sharing_agreement_ids", limit: 65535
    t.text     "fields",                limit: 65535
    t.text     "followup_ids",          limit: 65535
    t.bigint   "ticket_form_id"
    t.bigint   "brand_id"
    t.boolean  "allow_channelback"
    t.string   "result_type"
    t.integer  "weight",                              default: 0
    t.text     "email_cc_ids",          limit: 65535
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "role",                   default: 0,  null: false
    t.integer  "refresh_interval",       default: 0
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
