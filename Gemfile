ruby File.read(".ruby-version").strip

source "https://rubygems.org"

# --- Core Framework ---
gem "rails", "~> 8.0.3"

# --- Web Server ---
gem "puma", ">= 5.0"

# --- Asset Pipeline & Frontend ---
gem "propshaft"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "bootstrap", "~> 5.3"
gem "dartsass-rails"

# --- Deployment & Performance ---
gem "bootsnap", require: false
gem "ostruct"

# --- Platform-specific ---
gem "tzinfo-data", platforms: %i[windows jruby]

# --- Development & Test ---
group :development, :test do
  gem "debug", platforms: %i[mri windows], require: "debug/prelude"
  gem "brakeman", require: false
  gem "rubocop-rails-omakase", require: false
  gem "dotenv-rails"
end

# --- Development Only ---
group :development do
  gem "web-console"
end

# --- Test Only ---
group :test do
  gem "capybara"
  gem "selenium-webdriver"
end
