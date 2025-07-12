import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
export default function Profile() {
  return (
    <div>
      <Breadcrumbs variant="bordered">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Music</BreadcrumbItem>
        <BreadcrumbItem>Artist</BreadcrumbItem>
        <BreadcrumbItem>Album</BreadcrumbItem>
        <BreadcrumbItem>Song</BreadcrumbItem>
      </Breadcrumbs>

      <h1>Profile Page</h1>
      <p>This is the profile page content.</p>
    </div>
  );
}
