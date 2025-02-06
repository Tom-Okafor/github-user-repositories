import ProfileImage from "./ProfileImage";
import PersonalDetails from "./PersonalDetails";
import AccountDetails from "./AccountDetails";
import LinkToAccount from "./LinkToAccount";

export default function UserBioData() {
   return (
    <div className="pb-8 flex flex-col gap-4 items-center font-main">
      <ProfileImage />
      <PersonalDetails />
      <AccountDetails />
      <LinkToAccount />
    </div>
  );
}
