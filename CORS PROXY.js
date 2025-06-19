async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user-message');
        conversationHistory.push({
            role: "user",
            content: message
        });
        
        input.value = '';
        input.style.height = 'auto';
        
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message';
        typingDiv.textContent = 'Writing...';
        document.getElementById('chatMessages').appendChild(typingDiv);
        
        try {
            const TOGETHER_API_KEY = 'tgp_v1_xq21ryIkQb1TVksNSGljjL670TTpQp5M-3vRgRllWUE';
            
            // Clean the conversation history - remove system message for Together AI
            const cleanMessages = conversationHistory.filter(msg => msg.role !== 'system');
            
            const response = await fetch('https://api.together.xyz/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${TOGETHER_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'meta-llama/Llama-3-8b-chat-hf', // Changed to a more reliable model
                    messages: cleanMessages.slice(-8), // Keep last 8 messages, no system message
                    max_tokens: 1000,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.log('Error response:', errorData);
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('API Response:', data);
            
            // Remove typing indicator
            typingDiv.remove();
            
            // Get AI response
            if (data.choices && data.choices[0] && data.choices[0].message) {
                const aiResponse = data.choices[0].message.content;
                addMessage(aiResponse, 'ai-message');
                conversationHistory.push({
                    role: "assistant",
                    content: aiResponse
                });
            } else {
                throw new Error('Invalid response format');
            }
            
        } catch (error) {
            typingDiv.remove();
            console.error('Full error:', error);
            
            let errorMessage = "I'm having trouble connecting. ";
            if (error.message.includes('400')) {
                errorMessage += "There was an issue with the request format.";
            } else if (error.message.includes('401')) {
                errorMessage += "API key issue.";
            } else if (error.message.includes('429')) {
                errorMessage += "Too many requests. Please wait a moment.";
            } else {
                errorMessage += "Please try again.";
            }
            
            addMessage(errorMessage, 'ai-message');
        }
    }
}