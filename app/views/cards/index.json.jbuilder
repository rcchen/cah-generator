json.array!(@cards) do |card|
  json.extract! card, :id, :text, :type
  json.url card_url(card, format: :json)
end
