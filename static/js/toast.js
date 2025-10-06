function showToast(title, message, type = 'normal', duration = 3000) {
    const toastComponent = document.getElementById('toast-component');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    
    if (!toastComponent) return;

    // Reset classes
    toastComponent.className =
      "fixed bottom-8 right-8 p-4 px-6 rounded-xl shadow-lg z-50 opacity-0 transition-all duration-300 translate-y-64 flex items-center gap-3 border";

    // Set type styles & icon
    if (type === 'success') {
        toastComponent.classList.add("bg-gray-800", "border-green-500", "text-green-400");
        toastIcon.textContent = "✅";
    } else if (type === 'error') {
        toastComponent.classList.add("bg-gray-800", "border-red-500", "text-red-400");
        toastIcon.textContent = "❌";
    } else {
        toastComponent.classList.add("bg-gray-800", "border-[#ff7b00]", "text-[#ff7b00]");
        toastIcon.textContent = "ℹ️";
    }

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    toastComponent.classList.remove("opacity-0", "translate-y-64");
    toastComponent.classList.add("opacity-100", "translate-y-0");

    setTimeout(() => {
        toastComponent.classList.remove("opacity-100", "translate-y-0");
        toastComponent.classList.add("opacity-0", "translate-y-64");
    }, duration);
}
