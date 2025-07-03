import {
	Box,
	Typography,
	Card,
	CardContent,
	CardMedia,
	Button,
	Chip,
	Stack,
} from "@mui/material";
import { InsertDriveFile, Launch } from "@mui/icons-material";
import { useState } from "react";

const projects = [
	{
		title: "FECE-Lab Management System",
		description:
			"A comprehensive lab management system built with HTML/CSS/JS, Node.js, and MySQL. Features include a QR code attendance system, lab report handling, admin/faculty dashboards, and equipment request tracking.",
		image:
			"LL.png",
		demoLink: "https://fece-lab-management-system-2.onrender.com/",
		codeLink: "https://github.com/ermi21ad/FECE-Lab-Management-System",
		tags: ["Web Development", "HTML , JS","Tailwind CSS" , "Node.js", "MySQL"],
	},

];

export default function Projects() {
	const [hoveredCard, setHoveredCard] = useState(null);

	return (
		<Box
			id="projects"
			sx={{
				py: 8,
				px: { xs: 2, md: 4 },
				bgcolor: "background.paper",
				maxWidth: 1200,
				mx: "auto",
			}}
		>
			<Typography
				variant="h4"
				fontWeight="bold"
				gutterBottom
				sx={{ mb: 4, textAlign: "center" }}
			>
				My Projects
			</Typography>

			<Stack spacing={4}>
				{projects.map((project, index) => (
					<Card
						key={index}
						onMouseEnter={() => setHoveredCard(index)}
						onMouseLeave={() => setHoveredCard(null)}
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							height: { md: 300 },
							transition: "transform 0.3s, box-shadow 0.3s",
							transform: hoveredCard === index ? "translateY(-8px)" : "none",
							boxShadow: hoveredCard === index ? 3 : 1,
							"&:hover": {
								boxShadow: 4,
							},
						}}
					>
						<CardMedia
							component="img"
							image={project.image}
							alt={project.title}
							sx={{
								width: { md: 650 },
								height: { xs: 200, md: "auto" },
								objectFit: "cover",
							}}
						/>

						<CardContent
							sx={{
								flex: 1,
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<Box>
								<Typography variant="h5" fontWeight="bold" gutterBottom>
									{project.title}
								</Typography>
								<Typography variant="body1" color="text.secondary" paragraph>
									{project.description}
								</Typography>
								<Stack direction="row" spacing={1} sx={{ mb: 2 }}>
									{project.tags?.map((tag, i) => (
										<Chip key={i} label={tag} size="small" />
									))}
								</Stack>
							</Box>

							<Box sx={{ display: "flex", gap: 2 }}>
								<Button
									variant="contained"
									href={project.demoLink}
									startIcon={<Launch />}
									sx={{
										flex: 1,
										py: 1,
									}}
								>
								Demo LINK
								</Button>
								<Button
									variant="outlined"
									startIcon={<InsertDriveFile />}
									href={project.codeLink}
									sx={{
										flex: 1,
										py: 1,
									}}
								>
									Github
								</Button>
							</Box>
						</CardContent>
					</Card>
				))}
			</Stack>
		</Box>
	);
}
