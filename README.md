# School Helper AI

## Setup Instructions

1. Copy `config.template.js` to `config.js`
2. Replace `'your-api-key-here'` in `config.js` with your actual Groq API key
3. Never commit your `config.js` file to Git

## Getting a Groq API Key

1. Visit [Groq's website](https://console.groq.com) and create an account
2. Navigate to the [API Keys section](https://console.groq.com/keys)
3. Generate a new API key
4. Your API key will start with `gsk_`

## Security Note
The `config.js` file is ignored by Git to protect sensitive information. Make sure to keep your API keys secure and never share them publicly.

## Features
- Powered by Groq's Mixtral-8x7b model by default
- Optional OpenAI integration
- Real-time chat interface
- Dark/Light mode support
- Adjustable text size

## Using Your Own OpenAI API Key (Optional)
1. Click the ⚙️ button in the chat interface
2. Enter your OpenAI API key (starts with `sk-`)
3. Click "Save Key"
4. To switch back to Groq, click "Use Default (Groq)"

## Note
The default Groq integration is provided for free. You only need an API key if you want to use OpenAI's services 