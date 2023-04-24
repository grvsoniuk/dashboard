require 'ostruct'
require 'yaml'

org_config = YAML.load_file("#{Rails.root}/config/org.yml") || {}
OrgConfig = OpenStruct.new(org_config)