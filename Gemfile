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

# --- Deployment & Performance ---
gem "bootsnap", require: false

# --- Platform-specific ---
gem "tzinfo-data", platforms: [ :windows, :jruby ]

# --- Development & Test ---
group :development, :test do
  gem "debug", platforms: [ :mri, :windows ], require: "debug/prelude"
  gem "brakeman", require: false
  gem "rubocop-rails-omakase", require: false
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
