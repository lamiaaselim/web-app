# Section 3: WordPress Development

## Task 1: Theme Customization

### Steps for Theme Customization

1. **Access Theme Files:**
   - Open File Manager: -![File Manager](./assets/images/Section03-Solution%20(1).png)
   - Navigate to the theme folder in your site: `wp-content/themes/twentytwentyone/`.
   - You will find theme files such as `functions.php` and `footer.php`.
   - ![theme files](./assets/images/Section03-Solution%20(2).png)

2. **Create a Custom Widget Area:**
   - Open the `functions.php` file and add a function to register a new widget area.
   - Name the new widget area "Custom Footer Widget Area".

3. **Display the Widget Area in the Theme:**
   - Open the `footer.php` file and add the code to display the widget area above the footer.
   - Ensure the code checks if there are widgets in the area before displaying them.

4. **Test the Result:**
   - Go to the WordPress Dashboard → Appearance → Widgets.
   - Add widgets to the new widget area -![widget area](./assets/images/Section03-Solution%20(5).png)
   - Visit the site and ensure the widget area appears above the footer.

---

## Task 2: Plugin Development

### Steps

1. **Create the Plugin File:**
   - Create a new folder named `events-plugin` in the plugins directory: `wp-content/plugins/events-plugin/`.
   - Inside the folder, create a new file named `events-plugin.php`:
   - -![events-plugin](./assets/images/Section03-Solution%20(3).png)

2. **Create a Custom Post Type:**
   - Add a function to register a custom post type called "Events".
   - Ensure the new post type supports custom fields.

3. **Add Custom Fields:**
   - Add a custom meta box in the post editor to input:
     - **Date**
     - **Location**
     - **Organizer**

4. **Save Custom Field Data:**
   - Add a function to save the data entered in the custom fields.

5. **Display Events on the Front End:**
   - Create a shortcode to display events on any page or post.
   - Use `WP_Query` to retrieve events from the database and display them.

6. **Test the Result:**
   - Go to the WordPress Dashboard → Events → Add New.
   - Add an event with details (Date, Location, Organizer).
   - Use the shortcode `[display_events]` on a page and ensure the events are displayed.
   - -![display_events](./assets/images/Section03-Solution%20(4).png)

---

## Notes

- Always back up your files before making any changes.
- If you encounter any issues, enable Debug Mode to track errors.
