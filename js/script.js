// Update time and date in real-time
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const dateTimeString = now.toLocaleDateString('en-US', options);
    document.getElementById('current-time').textContent = dateTimeString;
}

// Update time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Command functionality (basic version)
document.addEventListener('DOMContentLoaded', function() {
    const commandInput = document.querySelector('.command-input');
    const outputContainer = document.querySelector('.output-container');
    const commands = document.querySelectorAll('.command');
    
    // Focus on input field
    commandInput.focus();
    
    // Handle command input
    commandInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim();
            if (command) {
                // Add command to output
                const commandLine = document.createElement('div');
                commandLine.innerHTML = `<span class="prompt">evangeline@portfolio:~$</span> ${command}`;
                outputContainer.appendChild(commandLine);
                
                // Clear input
                this.value = '';
                
                // Scroll to bottom
                outputContainer.scrollTop = outputContainer.scrollHeight;
            }
        }
    });
    
    // Handle command clicks
    commands.forEach(cmd => {
        cmd.addEventListener('click', function() {
            const command = this.textContent;
            const commandLine = document.createElement('div');
            commandLine.innerHTML = `<span class="prompt">evangeline@portfolio:~$</span> ${command}`;
            outputContainer.appendChild(commandLine);
            
            // Scroll to bottom
            outputContainer.scrollTop = outputContainer.scrollHeight;
            
            // Focus back on input
            commandInput.focus();
        });
    });
});