import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";

import { AvatarCard } from "./AvatarCard";

const user = {
  avatar:
    "storage/media/IMAGE/6227/AVATAR_8fd1ef687196faf8db7d4a8bce0d4bd0f1cbc134.png",
  avatarUrl:
    "https://s3.tamtam.pro/rc/storage/media/IMAGE/6227/AVATAR_8fd1ef687196faf8db7d4a8bce0d4bd0f1cbc134.png",
  id: "",
  firstName: "Jean",
  lastName: "BAETEN",
  isSelected: false,
  lng: "en",
  headline: "REDACTOR",
};

export default {
  title: "AvatarCard",
  component: AvatarCard,
  decorators: [
    StoryRouter(),
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
    withKnobs,
  ],
};

export const Light = () => (
  <div class="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-3">
        <AvatarCard theme="light" {...user} />
      </div>
    </div>
  </div>
);

export const LightEdit = () => (
  <div class="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-4 large-3">
        <AvatarCard
          theme="light"
          showAvatarEdit={true}
          onAvatarClick={action("onAvatarClick")}
          {...user}
        />
      </div>
    </div>
  </div>
);

export const Dark = () => (
  <div style={{ background: "#29394d", padding: "3rem" }}>
    <div class="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-4 large-3">
          <AvatarCard theme="dark" {...user} />
        </div>
      </div>
    </div>
  </div>
);

export const DarkEdit = () => (
  <div style={{ background: "#29394d", padding: "3rem" }}>
    <div class="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-4 large-3">
          <AvatarCard
            theme="dark"
            showAvatarEdit={true}
            onAvatarClick={action("onAvatarClick")}
            {...user}
          />
        </div>
      </div>
    </div>
  </div>
);