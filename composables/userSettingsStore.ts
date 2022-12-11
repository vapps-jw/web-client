const useUserSettings = () => {
    const isNavbarOpen = useState("userSettings", () => false)

    const toggleNavbarOpen = () => {
        isNavbarOpen.value = !isNavbarOpen.value
    }

    return {
        isNavbarOpen,
        toggleNavbarOpen
    }
}

export default useUserSettings;