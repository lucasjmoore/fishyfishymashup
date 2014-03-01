json.array!(@scrapers) do |scraper|
  json.extract! scraper, :id
  json.url scraper_url(scraper, format: :json)
end
