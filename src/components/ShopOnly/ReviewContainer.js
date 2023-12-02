import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../Theme";
import { Delete, Star } from "@mui/icons-material";
import { BASE_URL } from "../../api/Api";

function ReviewContainer({ data }) {
  const {
    username,
    profile_pic,
    var_name,
    review_content,
    rating,
    attachment_image,
  } = data || {};
  return (
    <Stack spacing={1} sx={{ ...classes.main }}>
      {/*Review Info // Delete Comment */}
      <Box sx={{ ...classes.reviewContainer }}>
        {/*Review Info */}
        <Box sx={{ ...classes.reviewInfo }}>
          <Avatar src={`${BASE_URL}/${profile_pic}`} />
          <Stack spacing={0} sx={{ textAlign: "left" }}>
            <Rating
              defaultValue={rating}
              readOnly
              emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <Typography variant="subtitle1">{username}</Typography>
          </Stack>
        </Box>

        {/*Delete Comment */}
        <IconButton color="error" sx={{ height: 40 }}>
          <Delete color="inherit" />
        </IconButton>
      </Box>

      {/*Product Image */}
      {attachment_image ? (
        <img src={attachment_image} style={{ height: 100, width: 100 }} />
      ) : (
        ""
      )}

      <Typography
        variant="body"
        sx={{ color: `${theme.palette.text.sixty}`, fontSize: "14px" }}
      >
        Variant: <b>{var_name}</b>
      </Typography>

      <Typography variant="body" sx={{ lineHeight: "18px", fontSize: "14px" }}>
        {review_content}
      </Typography>
    </Stack>
  );
}

const classes = {
  main: {
    ...theme.components.box.sectionContainer,
    width: "100%",
    backgroundColor: `${theme.palette.background.paper}`,
    minHeight: 100,
    textAlign: "left",
    px: 2,
    py: 2,
    my: 2,
    borderRadius: 2,
  },

  reviewContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  reviewInfo: {
    display: "flex",
    direction: "row",
    alignItems: "center",
    gap: 2,
  },
};
export default ReviewContainer;
