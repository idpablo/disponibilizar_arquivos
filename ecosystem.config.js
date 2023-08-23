module.exports = {
    apps: [
      {
        name: 'app', 
        script: 'app.js', 
        interpreter: 'none', 
        cwd: 'C:/Docker/disponibilizar-arquivos',
        watch: true, 
        autorestart: false,
        max_restarts: 10, 
        ignore_watch: ['node_modules', '.git', '.vscode'],
        env: {
        },
      },
    ],
  };