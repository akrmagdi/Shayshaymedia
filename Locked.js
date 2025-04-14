fetch('https://raw.githubusercontent.com/akrmagdi/Shayshaymedia/refs/heads/main/status.text')
  .then(res => res.text())
  .then(status => {
    if (status.trim() !== 'off') return; // Only lock if status is "off"

     document.documentElement.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<style>
  body {
    margin: 0;
    background: linear-gradient(to bottom right, #f5f5f5, #e0e0e0);
    font-family: 'Inter', sans-serif;
  }
  .fade-in {
    animation: fadeIn 1s ease-in-out both;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

<div class="flex items-center justify-center min-h-screen px-4">
  <div class="bg-white fade-in rounded-3xl shadow-2xl max-w-2xl w-full text-center p-10 border-t-[10px] border-[#8c52ff]">

    <!-- 🔻 Logo Image (responsive) -->
    <div class="flex justify-center mb-6 relative z-10">
      <img src="https://6mt.fda.myftpupload.com/syscontrol/Logo-Main.svg
" alt="AKR Motion Logo" class="w-32 sm:w-40 h-auto" />
    </div>

    <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 relative z-10">Website Temporarily Suspended</h1>

    <p class="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 relative z-10">
      This website is currently unavailable due to an unresolved billing issue.<br />
      Please reach out to our team to resolve the matter and restore service.
    </p>

    <div class="bg-[#8c52ff]/10 p-5 rounded-xl text-sm text-[#8c52ff] font-medium mb-6 relative z-10">
      Contact us: <a href="mailto:team@akr-motion.com" class="underline">team@akr-motion.com</a><br>
      Site ID: #AKR-LOCKED-${new Date().getFullYear()}
    </div>

    <p class="text-xs text-gray-400 mt-6 relative z-10">
    ${new Date().getFullYear()} AKR Motion. All rights reserved.
    </p>
  </div>
</div>
`;
  });
