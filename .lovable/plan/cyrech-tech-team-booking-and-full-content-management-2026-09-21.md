# Cyrech Tech team, booking, and full content management

## Goal
Expand the existing portfolio without changing its established dark Cyrech Tech style. Add a team section, a booking section, editable company details, the supplied logo, and a technology image for the IT Competition feature.

## What will be added
- Add a “Meet the Team” section with five initial members:
  - Ebua Glenn Ndoh — CEO
  - Tarshi Williams — Chief Project Manager
  - Akimbong Chercy — HR
  - Ewe Bryan — Head of Engineering Team
  - Ebua Ford Buo — Chief Executive Officer
- Generate a consistent professional portrait for each member and add editable descriptions as starting content.
- Add a dedicated booking section on the same page. Every service row will link directly to it and preselect that service.
- Keep bookings compatible with the existing email-based contact system: submitting prepares a booking email in the visitor’s email app.
- Display `+237 679 342 103` as a clickable phone number.
- Replace the IT Competition background with a suitable generated technology image.
- Use the uploaded Cyrech Tech logo in the navigation, footer, and admin area.
- Add Team and Booking navigation links where appropriate.

## Admin controls
- Add a Team tab where members can be added, reordered, edited, deleted, and assigned an image, role, name, and description.
- Extend Profile/settings controls so the logo, phone number, section headings, section descriptions, calls to action, form labels, navigation labels, statistics, About content, IT Competition content, contact copy, and footer wording can be changed.
- Keep projects, gallery, services, and skills editable through their existing tabs.
- Add an editable service description while retaining the existing service title and order controls.

## Technical details
- Add a protected `team_members` data table with public read access and admin-only editing.
- Extend site settings with structured editable content and booking/contact fields while preserving existing values as defaults.
- Continue using the existing private image upload flow for team photos, the logo, and replaceable section imagery.
- Store the supplied logo as a project CDN asset; generated portraits and the technology image will be initial editable media.
- Seed all initial team records and new site settings.
- Update desktop and mobile navigation, section ordering, and active-section tracking.
- Verify the homepage, service-to-booking flow, phone link, admin editors, mobile layout, and clean runtime/build state.
