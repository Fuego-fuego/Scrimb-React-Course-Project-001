import "./theme-selector.css"

const ThemeSelector = () => {


        return (
        <div class="theme-selector-wrapper | flex">
                <label for="themeSelector" className="capitalize">theme</label>
                <select name="themeSelector" id="themeSelector" className="theme-selector | capitalize"
                        aria-label="theme selector">
                        <option value="system" data-theme="system">system</option>
                        <option value="light" data-theme="light">light</option>
                        <option value="dark" data-theme="dark">dark</option>
                </select>
        </div>
        
        )
}



export default ThemeSelector