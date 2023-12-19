import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MUITable = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.drupal.org/api-d7/comment.json');
        setComments(response.data.list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom style={{ color: 'black' }}>
        MUI Table
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Comment Body</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Node URI</TableCell>
              <TableCell>Author URI</TableCell>
              <TableCell>Author ID</TableCell>
              <TableCell>Edit URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.map((comment) => (
              <TableRow key={comment.cid}>
                 <TableCell>
                  <div dangerouslySetInnerHTML={{ __html: comment.comment_body?.value || 'null' }} />
                </TableCell>
                <TableCell>{comment.name || 'null'}</TableCell>
                <TableCell>{comment.node?.uri || 'null'}</TableCell>
                <TableCell>{comment.author?.uri || 'null'}</TableCell>
                <TableCell>{comment.author?.id || 'null'}</TableCell>
                <TableCell>{comment.edit_url || 'null'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MUITable;
